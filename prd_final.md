# QuestForge: The DM's Idea Engine

**Version:** 1.1 (Live)  
**Status:** Deployed  
**Last Updated:** December 2025

---

## Overview

QuestForge is a web-based AI-powered content generator that helps Dungeon Masters create compelling D&D content in seconds. Input your campaign themes and character details to receive customized plot hooks, combat encounters, and lore pieces—generated in real-time by AI.

## Vision

Become the go-to creative assistant for DMs, reducing prep time while enhancing campaign quality through AI-powered content generation.

## Key Goals

- Generate high-quality D&D content instantly using real AI
- Overcome creative blocks and writer's fatigue
- Maintain campaign consistency with customized outputs

---

## Target Users

### Primary: "Busy Brandon" - The Time-Starved DM

- **Age:** 28-45 | **Experience:** 2-10 years
- **Pain Points:** Limited prep time, weekly content demands, improvisation challenges
- **Needs:** Quick, high-quality, personalized content

### Secondary: "New Nicole" - The First-Time DM

- **Age:** 18-30 | **Experience:** 0-1 years
- **Pain Points:** Overwhelmed by world-building, uncertain about design, lacks confidence
- **Needs:** Templates and examples to learn from

### Tertiary: "Veteran Victor" - The Long-Running Campaign DM

- **Age:** 35-60 | **Experience:** 10+ years
- **Pain Points:** Keeping campaigns fresh, interconnected stories, quick improvisation
- **Needs:** Creative inspiration and rapid generation tools

---

## Core Features

### 1. AI Input Panel

Interactive form capturing campaign context for AI-powered content generation.

**Components:**

- **Campaign Theme** (text, 3-100 chars) - e.g., "Ancient Ruin," "Political Intrigue"
- **Character/NPC Trait** (text, 5-150 chars) - e.g., "Gnome Rogue with gambling problem"
- **Idea Type** (dropdown) - Plot Hook, Combat Encounter, or Lore Piece
- **Generate Button** - "Forge the Quest!" with loading animation (1.5s minimum)

### 2. AI-Powered Generation

Real-time content generation using Lovable AI (Google Gemini 2.5 Flash).

**How it works:**

- User inputs are sent to a secure backend edge function
- The AI receives a specialized D&D system prompt that adapts tone based on content type
- Structured output is returned with title, summary, and obstacle
- Results are displayed in a formatted fantasy-themed card

### 3. Results Display

Formatted output showing AI-generated D&D content.

**Structure:**

- **Title** - Evocative, fantasy-styled name (3-8 words)
- **Summary** - 2-3 sentence narrative (50-150 words)
- **Obstacle** - Single sentence challenge (20-50 words)

### 4. Fantasy-Themed UI/UX

Immersive visual design with tabletop RPG aesthetics.

**Design Elements:**

- Dark charcoal background with burgundy, forest green, and gold accents
- Serif typography for fantasy aesthetic
- Subtle glow effects and smooth transitions
- Responsive layout (desktop and mobile)

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18.3.1 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.x |
| Components | shadcn-ui |
| Icons | lucide-react |
| State | React useState hooks |
| Backend | Lovable Cloud (Edge Functions) |
| AI | Lovable AI Gateway (Gemini 2.5 Flash) |

### Data Structure

```typescript
interface QuestResult {
  title: string;      // AI-generated quest title
  summary: string;    // 2-3 sentence description
  obstacle: string;   // Challenge/complication
}
```

### AI Integration Architecture

```
User Input → Frontend → Edge Function → Lovable AI Gateway → Gemini 2.5 Flash
                                              ↓
                         Structured JSON ← Tool Calling Response
```

---

## Success Metrics

### Primary (Prototype Phase)

- **Engagement:** ≥3 generations per session
- **Usability:** ≥95% form completion rate
- **Performance:** ≤2s page load, ≤3s generation time

### Quality Standards

- Form error rate: ≤10%
- Time to first generation: ≤45 seconds
- Mobile usability score: ≥90/100

---

## Content Requirements

### AI Output Standards

Each AI response must include:

**Title:**
- Evocative and memorable (3-8 words)
- Proper capitalization, no generic names

**Summary:**
- 2-3 complete sentences in present tense
- Include sensory details or atmosphere
- End with a hook or call to action

**Obstacle:**
- Single actionable sentence
- Suggests player choice or complexity
- Mechanically or narratively meaningful

### Content Types

| Type | Tone | Focus |
|------|------|-------|
| Plot Hook | Mysterious, intriguing | Story initiation |
| Combat Encounter | Action-oriented, tactical | Battlefield conditions |
| Lore Piece | Scholarly, historical | World-building |

---

## Out of Scope (v1.1)

Not included in this version:

- ❌ User authentication/profiles
- ❌ Saved content history
- ❌ Edit or export functionality
- ❌ Social features or sharing
- ❌ Payment/premium features
- ❌ Additional generators (NPC, items, dungeons)

---

## Future Roadmap

### Phase 2: Content Management (Q1 2026)

- User authentication and profiles
- Personal content library with editing
- Export options (PDF, Markdown)

### Phase 3: Enhanced Features (Q2 2026)

- NPC generator with personality traits
- Magic item generator
- Random encounter tables
- Session planning tools

### Phase 4: Community & Monetization (Q3 2026)

- Free tier (10 generations/day)
- Pro tier ($9/month, unlimited)
- Template marketplace
- Campaign sharing features

---

## Testing Requirements

### Must Test

- ✅ AI generation returns valid structured JSON
- ✅ Input validation rejects invalid inputs
- ✅ Form submission triggers generation correctly
- ✅ Loading states appear and clear properly
- ✅ Error handling displays user-friendly messages
- ✅ Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- ✅ Mobile usability on small screens
- ✅ Keyboard navigation throughout
- ✅ WCAG AA accessibility standards

---

## Deployment

**Platform:** Lovable Cloud (automatic deployment)  
**URL:** [project-name].lovable.app  
**SSL:** Automatic via platform  
**Backend:** Edge Functions (auto-deployed)

### Launch Checklist

- [ ] All tests passing
- [ ] Cross-browser testing complete
- [ ] Mobile testing complete
- [ ] README updated
- [ ] Error boundaries in place
- [ ] Performance budget met (<2s load)
- [ ] Accessibility audit complete (WCAG AA)
- [ ] AI integration verified

---

## Example Output

**Input:**
- Theme: "Ancient Ruin"
- Character: "Gnome Rogue with gambling problem"
- Type: "Plot Hook"

**AI-Generated Output:**

> **Title:** The Whispers of the Obsidian Labyrinth
>
> **Summary:** Deep beneath the forgotten city of Keth'Amar, an obsidian labyrinth holds the treasures of a fallen empire. A gnome rogue with debts to settle has acquired a map—but the labyrinth's whispers promise more than gold.
>
> **Obstacle:** The labyrinth shifts its corridors every hour, and ancient guardians still patrol its halls.

---

## Glossary

- **DM (Dungeon Master):** Person who runs the D&D game
- **Plot Hook:** Narrative element to engage players in a story
- **Combat Encounter:** Structured battle scenario
- **Lore:** Background information about the game world
- **NPC (Non-Player Character):** Characters controlled by the DM
- **Campaign:** Ongoing series of connected D&D sessions
- **Lovable AI:** Built-in AI gateway providing access to LLM models
- **Edge Function:** Serverless backend function for secure API calls
