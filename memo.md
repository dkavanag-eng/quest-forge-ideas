# Implementation & Ethics Memo: QuestForge

## How I Actually Used AI While Building

QuestForge was built almost entirely through vibe coding. I used Lovable as my primary tool—describing what I wanted in plain English and letting it generate the React/TypeScript code. I have no formal programming background; before this course, the closest I got to code was copying and pasting things into terminal windows and hoping nothing caught fire.

The process was genuinely surprising. I would describe a feature ("I want a dropdown that lets users select between Plot Hook, Combat Encounter, and Lore Piece"), and Lovable would scaffold it out. When something broke, I would describe the problem, and it would usually fix it. I also used Claude extensively for planning—drafting the PRD, thinking through user personas, and debugging when Lovable's suggestions did not work.

Where human judgment mattered most was in the design decisions that AI could not make for me. Lovable could generate a form, but it could not tell me whether "Campaign Theme" was the right input field or whether users would understand what to put there. It could not tell me whether the fantasy aesthetic I wanted would actually resonate with DMs or just look like a bad medieval fair flyer. Those calls were mine.

I also spent time rewriting the copy that AI generated. The initial outputs were functional but bland—"Enter your campaign details to generate content." I rewrote it to match the tone I wanted: "Forge the Quest!" instead of "Generate." Small things, but they mattered for making it feel like a product instead of a homework assignment.

## Why the AI Feature Looks the Way It Does

The core AI feature in QuestForge is the content generator: you input a campaign theme, a character trait, and select a content type, and the system returns a formatted plot hook, combat encounter, or lore piece.

I chose this feature because it solves a real problem I have experienced. I run D&D campaigns, and prep is a grind. Coming up with fresh plot hooks every week is exhausting, especially when you are also managing a startup, a masters programme, and life. The value proposition is simple: reduce the time from "I need an idea" to "I have something usable" from thirty minutes to thirty seconds.

I scoped it down significantly from my original vision. The first PRD included NPC generators, magic item creators, dungeon builders, and a saved content library. I cut all of that. Partly because of time constraints, but also because I wanted to nail the core experience first.

I initially attempted to integrate the Gemini API directly, but hit platform limitations—Lovable's free tier doesn't expose environment variables for API keys. After running out of credits trying to debug it, I upgraded to a paid plan and used Lovable's built-in AI connector instead. The lesson: sometimes the pragmatic solution beats the elegant one.

## Risks, Trade-offs, and Integrity

**Over-reliance:** The biggest risk is that DMs use QuestForge as a crutch instead of a tool. Good D&D comes from a DM who knows their world and their players. An AI-generated plot hook is a starting point, not a finished product.

**Quality variance:** AI outputs are inconsistent. Sometimes the model returns something genuinely inspiring; sometimes it returns clichéd nonsense about "ancient evils awakening." I cannot guarantee quality, which is uncomfortable.

**Bias in content:** The AI was trained on existing fantasy content, which means it inherits the biases of that genre—Eurocentric settings, certain racial archetypes, gendered tropes. Future versions should include options for non-Western fantasy themes.

**Data and privacy:** QuestForge does not store user inputs or generated content. Each generation is stateless. This was a deliberate choice.

**Academic integrity:** I used AI extensively to build this project—Lovable for code generation, Claude for planning and writing. I have tried to be transparent about this throughout. The ideas are mine; the execution was assisted.

## What I Learned About Building with GenAI

The biggest surprise was how much prompting is a skill. Early on, I would give Lovable vague instructions and get vague results. Over time, I learned to be specific: describe the exact behavior I wanted, give examples, anticipate edge cases.

If I were teaching another founder how to use GenAI tools, I would say this: treat the AI like a very fast, very literal subordinate. It will do exactly what you ask, which means you need to know what to ask.

This project has changed how I think about AI in my own startup work. The question is not "should we use AI?" but "where does AI add value, and where does it create risk?" QuestForge is a low-stakes application—bad output means a mediocre D&D session, not a failed medical diagnosis. That context matters.
