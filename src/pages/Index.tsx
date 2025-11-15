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

  const questTemplates = {
    "Plot Hook": [
      {
        title: "The Whispers of the Obsidian Labyrinth",
        summary: "Deep beneath the forgotten city, an ancient maze awakens. Local miners report hearing voices that speak in forgotten tongues, promising power to those brave enough to descend. The voices grow stronger each night, and some miners have not returned.",
        obstacle: "The labyrinth shifts its corridors every dawn, and the voices belong to imprisoned spirits who seek bodies to possess."
      },
      {
        title: "The Pact of Crimson Shadows",
        summary: "A wealthy merchant offers an impossible sum for a simple delivery to a remote monastery. The package is sealed with blood-red wax and pulses with an unnatural warmth. He warns that failure to deliver by the full moon will have dire consequences.",
        obstacle: "A rival faction seeks to intercept the package, and the monastery holds dark secrets about the merchant's true intentions."
      },
      {
        title: "The Weeping Stones",
        summary: "Ancient standing stones across the realm have begun to cry actual tears. Scholars are baffled as the phenomenon spreads. A dying oracle speaks of a great wrong that must be righted before the stones' sorrow drowns the world.",
        obstacle: "The tears are acidic and corrupting the land. The party must piece together historical fragments to uncover a millennia-old betrayal."
      }
    ],
    "Combat Encounter": [
      {
        title: "Ambush at the Gilded Bridge",
        summary: "As the party crosses an ornate bridge spanning a misty ravine, shadows detach from the stonework itself. These shadow-thieves feed on memories and have been trapped in the bridge's architecture for centuries, waiting for fresh minds to drain.",
        obstacle: "The bridge begins to collapse as the combat intensifies, forcing tactical decisions between fighting and fleeing."
      },
      {
        title: "The Bone Garden Guardians",
        summary: "In an overgrown cemetery, skeletal warriors rise when the party disturbs a particular grave. These are no mindless undead—they retain their combat skills and tactical awareness from life, forming shield walls and executing coordinated strikes.",
        obstacle: "The skeletons regenerate unless their anchor—a cursed medallion buried somewhere in the cemetery—is found and destroyed."
      },
      {
        title: "Ritual of the Crimson Circle",
        summary: "The party interrupts cultists mid-ritual in an abandoned temple. Though the cultists are relatively weak, their ritual is nearly complete, and its energies lash out randomly during combat, creating a chaotic and unpredictable battlefield.",
        obstacle: "The party must decide whether to focus on the cultists or disrupt the ritual circle itself, each choice carrying consequences."
      }
    ],
    "Lore Piece": [
      {
        title: "The Architect's Folly",
        summary: "Ancient texts reveal that the realm's greatest architect was commissioned to build a grand palace but secretly encoded a terrible prophecy into its very structure. The palace stands today as the kingdom's seat of power, its true purpose hidden in geometric patterns and hidden chambers.",
        obstacle: "Uncovering the full prophecy requires accessing chambers that would reveal the conspiracy to current royal guards."
      },
      {
        title: "Song of the Starfall",
        summary: "A bardic ballad tells of a meteor shower that blessed certain bloodlines with magical ability. Recent astronomical records suggest another starfall approaches, but the song's final verse—describing a great cost—has been lost to time.",
        obstacle: "The only complete version of the song exists in the mind of an ancient dragon who values secrets more than gold."
      },
      {
        title: "The Sunken Library",
        summary: "Legends speak of a vast repository of knowledge that sank beneath the waves during a cataclysm. Merfolk whisper of glowing texts visible in the deepest trenches, and scholars offer fortunes for even fragments of waterlogged pages.",
        obstacle: "The library is guarded by creatures who have evolved to the crushing depths and view the knowledge as sacred."
      }
    ]
  };

  const forgeQuest = () => {
    if (!theme || !character || !ideaType) {
      return;
    }

    setIsForging(true);

    setTimeout(() => {
      const templates = questTemplates[ideaType as keyof typeof questTemplates];
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      
      // Customize the template slightly based on inputs
      const customizedResult = {
        ...randomTemplate,
        summary: randomTemplate.summary.replace(/party/g, "adventurers") + ` The ${theme.toLowerCase()} atmosphere adds an additional layer of mystery and danger.`,
      };

      setResult(customizedResult);
      setIsForging(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-gold animate-pulse" />
            <h1 className="text-5xl font-bold text-gold tracking-wide">
              QuestForge
            </h1>
            <Sparkles className="w-10 h-10 text-gold animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground italic">
            The DM's Idea Engine
          </p>
        </div>

        {/* Input Panel */}
        <Card className="p-8 mb-8 bg-card border-border/50 deep-shadow animate-in slide-in-from-bottom duration-700">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-lg text-foreground">
                Campaign Theme
              </Label>
              <Input
                id="theme"
                placeholder="e.g., Ancient Ruin, Political Intrigue, Desert Survival"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="character" className="text-lg text-foreground">
                Key Character/NPC Trait
              </Label>
              <Input
                id="character"
                placeholder="e.g., Gnome Rogue with a gambling problem, A King in disguise"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ideaType" className="text-lg text-foreground">
                Idea Type
              </Label>
              <Select value={ideaType} onValueChange={setIdeaType}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select an idea type" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="Plot Hook">Plot Hook</SelectItem>
                  <SelectItem value="Combat Encounter">Combat Encounter</SelectItem>
                  <SelectItem value="Lore Piece">Lore Piece</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={forgeQuest}
              disabled={!theme || !character || !ideaType || isForging}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 transition-all duration-300 hover:glow-effect"
            >
              {isForging ? (
                <>
                  <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                  Forging...
                </>
              ) : (
                <>
                  <Scroll className="mr-2 h-5 w-5" />
                  Forge the Quest!
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Results Display */}
        {result && (
          <Card className="p-8 bg-card border-gold/30 deep-shadow animate-in slide-in-from-bottom duration-700">
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <h2 className="text-3xl font-bold text-gold mb-2">
                  {result.title}
                </h2>
                <div className="h-1 w-24 bg-gold/50 rounded"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Summary
                  </h3>
                  <p className="text-foreground/90 leading-relaxed pl-4">
                    {result.summary}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Suggested Obstacle
                  </h3>
                  <p className="text-foreground/90 leading-relaxed pl-4">
                    {result.obstacle}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p className="italic">QuestForge - A Vibe Coding Project</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
