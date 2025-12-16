import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Scroll } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuestResult {
  title: string;
  summary: string;
  obstacle: string;
}

const Index = () => {
  const [theme, setTheme] = useState("");
  const [character, setCharacter] = useState("");
  const [ideaType, setIdeaType] = useState("");
  const [result, setResult] = useState<QuestResult | null>(null);
  const [isForging, setIsForging] = useState(false);
  const { toast } = useToast();

  const forgeQuest = async () => {
    if (!theme || !character || !ideaType) {
      return;
    }

    setIsForging(true);
    const startTime = Date.now();

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      if (!supabaseUrl) {
        throw new Error("Backend not configured");
      }
      
      const response = await fetch(
        `${supabaseUrl}/functions/v1/generate-quest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ theme, character, ideaType }),
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "API request failed");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const questResult: QuestResult = data;

      // Ensure minimum 1.5s loading time for intentional feel
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 1500 - elapsed);

      setTimeout(() => {
        setResult(questResult);
        setIsForging(false);
      }, remainingTime);

    } catch (error) {
      console.error("Forge error:", error);
      
      // Ensure minimum loading time even on error
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 1500 - elapsed);

      setTimeout(() => {
        toast({
          description: "The forge is temporarily cooling. Please try again.",
          variant: "destructive",
        });
        setIsForging(false);
      }, remainingTime);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Atmospheric background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-burgundy/20 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-forest/15 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-gold font-serif tracking-wide">
              QuestForge
            </h1>
            <Sparkles className="w-8 h-8 text-gold animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The DM's Idea Engine — Forge compelling plot hooks, combat encounters, and lore pieces for your D&D campaigns using AI.
          </p>
        </div>

        {/* Input Panel */}
        <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-deep mb-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-foreground font-medium">
                Campaign Theme
              </Label>
              <Input
                id="theme"
                placeholder="e.g., Ancient Ruin, Political Intrigue, Desert Survival..."
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-gold/50 focus:ring-gold/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="character" className="text-foreground font-medium">
                Key Character/NPC Trait
              </Label>
              <Input
                id="character"
                placeholder="e.g., Gnome Rogue with a gambling problem, A King in disguise..."
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-gold/50 focus:ring-gold/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ideaType" className="text-foreground font-medium">
                Idea Type
              </Label>
              <Select value={ideaType} onValueChange={setIdeaType}>
                <SelectTrigger className="bg-background/50 border-border/50 focus:border-gold/50 focus:ring-gold/20">
                  <SelectValue placeholder="Select the type of content to generate..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plot Hook">Plot Hook</SelectItem>
                  <SelectItem value="Combat Encounter">Combat Encounter</SelectItem>
                  <SelectItem value="Lore Piece">Lore Piece</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={forgeQuest}
              disabled={!theme || !character || !ideaType || isForging}
              className="w-full bg-gradient-to-r from-gold/90 to-gold hover:from-gold hover:to-gold/90 text-background font-semibold py-6 text-lg transition-all duration-300 hover:shadow-glow disabled:opacity-50"
            >
              {isForging ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  Forging...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Forge the Quest!
                </span>
              )}
            </Button>
          </div>
        </Card>

        {/* Results Display */}
        {result && (
          <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm border-border/50 shadow-deep animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Scroll className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gold font-serif">
                  {result.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Summary
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {result.summary}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                    Suggested Obstacle
                  </h3>
                  <p className="text-foreground/90 italic">
                    {result.obstacle}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
