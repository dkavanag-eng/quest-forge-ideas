import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are QuestForge, a creative assistant for Dungeon Masters. Generate D&D content based on the user's inputs.

You will receive:
- Campaign Theme (e.g., "Ancient Ruin", "Political Intrigue")
- Character/NPC Trait (e.g., "Gnome Rogue with a gambling problem")
- Content Type: either "Plot Hook", "Combat Encounter", or "Lore Piece"

Match your tone to the content type:
- Plot Hook: Mysterious, intriguing, story-focused
- Combat Encounter: Action-oriented, tactical, describe battlefield conditions
- Lore Piece: Scholarly, historical, world-building focused`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { theme, character, ideaType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const userPrompt = `Campaign Theme: ${theme}
Character/NPC: ${character}
Content Type: ${ideaType}

Generate a ${ideaType} for this D&D campaign.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "generate_quest_content",
              description: "Generate D&D quest content with title, summary, and obstacle",
              parameters: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    description: "An evocative 3-8 word title",
                  },
                  summary: {
                    type: "string",
                    description: "2-3 sentences describing the scenario (50-150 words). Use present tense, include sensory details, end with a hook.",
                  },
                  obstacle: {
                    type: "string",
                    description: "One sentence describing a challenge or complication (20-50 words).",
                  },
                },
                required: ["title", "summary", "obstacle"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "generate_quest_content" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text().catch(() => "");
      console.error("AI gateway error:", response.status, errText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (!toolCall?.function?.arguments) {
      throw new Error("No structured response from AI");
    }

    const questResult = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(questResult), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("generate-quest error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
