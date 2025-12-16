# ⚔️ QuestForge: The DM's Idea Engine

> An AI-powered D&D plot generator that transforms your campaign themes into epic adventures

QuestForge is an interactive web application designed to help Dungeon Masters quickly generate compelling plot hooks, combat encounters, and lore pieces for their D&D campaigns. Simply input your campaign theme, key characters, and desired content type—and watch QuestForge craft unique story elements tailored to your world using real AI.

---

## 🎬 Demo Video

[📺 Watch the Demo Video](#) <!-- Replace with your actual demo video link -->

---

## ✨ AI-Powered Features

QuestForge uses **Lovable AI** (powered by Google Gemini 2.5 Flash) to generate unique, context-aware D&D content in real-time.

### 🎲 Plot Hook Generator
Generates compelling story hooks and quest starters based on your campaign themes and character details. Perfect for kicking off new adventures or creating side quests that feel organic to your world.

**What it creates:**
- Engaging quest titles with atmospheric flavor
- 2-3 sentence story summaries that hook your players
- Meaningful obstacles that drive player engagement

### ⚔️ Combat Encounter Generator
Creates tactical battle scenarios with environmental challenges and strategic depth. Ideal for DMs who want dynamic combat beyond "you see monsters, roll initiative."

**What it creates:**
- Thematic encounter titles
- Combat setup with environmental context
- Tactical challenges that encourage creative problem-solving

### 📜 Lore Piece Generator
Builds world-building content including historical events, legendary artifacts, and cultural traditions. Essential for DMs who want rich, immersive campaign worlds.

**What it creates:**
- Evocative lore titles
- Historical narratives with campaign integration potential
- Knowledge challenges or discovery mechanics

---

## 💡 Sample Prompts & Outputs

### Plot Hook Example

**Input:**
- **Campaign Theme:** "Ancient Ruin"
- **Key Character:** "Gnome Rogue with a gambling problem"
- **Idea Type:** Plot Hook

**AI-Generated Output:**
```
Title: The Whispers of the Obsidian Labyrinth

Summary: Deep beneath the forgotten city of Keth'Amar, an obsidian labyrinth 
holds the treasures of a fallen empire. A gnome rogue with debts to settle 
has acquired a map—but the labyrinth's whispers promise more than gold.

Obstacle: The labyrinth shifts its corridors every hour, and ancient guardians 
still patrol its halls.
```

---

### Combat Encounter Example

**Input:**
- **Campaign Theme:** "Desert Survival"
- **Key Character:** "Nomad Warrior seeking revenge"
- **Idea Type:** Combat Encounter

**AI-Generated Output:**
```
Title: Sandstorm Ambush at the Dune Sea

Summary: A band of desert raiders, led by a nomad warrior seeking vengeance, 
attacks during a blinding sandstorm. Visibility is limited, and the shifting 
sands hide deadly traps.

Obstacle: Players must fight while managing limited visibility and avoiding 
quicksand patches that emerge during the storm.
```

---

### Lore Piece Example

**Input:**
- **Campaign Theme:** "Political Intrigue"
- **Key Character:** "A King in disguise"
- **Idea Type:** Lore Piece

**AI-Generated Output:**
```
Title: The Treaty of Broken Crowns

Summary: Centuries ago, five kingdoms signed the Treaty of Broken Crowns, 
establishing peace through royal intermarriage. Legend says one king signed 
in disguise, his true identity lost to history—and his bloodline holds claim 
to all five thrones.

Obstacle: Ancient records were deliberately destroyed. Uncovering the truth 
requires deciphering coded royal genealogies hidden across the kingdoms.
```

---

## 🎯 How It Works

1. **Input Your Campaign Details**
   - Enter a campaign theme (e.g., "Haunted Forest", "Pirate Seas", "Underdark Expedition")
   - Describe a key character or NPC trait (e.g., "Elven Ranger haunted by visions", "Dwarf Merchant with a secret")
   - Select your desired idea type (Plot Hook, Combat Encounter, or Lore Piece)

2. **Forge Your Quest**
   - Click the "Forge the Quest!" button
   - Lovable AI processes your inputs with a specialized D&D system prompt

3. **Receive AI-Generated Output**
   - **Title:** An evocative name for your content
   - **Summary:** A 2-3 sentence description ready to use at your table
   - **Suggested Obstacle:** A challenge or complication to drive player engagement

---

## 🎭 Use Cases

- **Pre-Session Prep:** Generate multiple plot hooks before your game and pick the one that resonates
- **Quick Encounter Generation:** Create combat scenarios on-the-fly when players go off-script
- **World-Building:** Develop rich historical lore for your campaign setting
- **NPC Motivation:** Use character traits to create personalized story threads
- **Campaign Variety:** Mix and match themes to keep your long-running campaign fresh

---

## 🧙‍♂️ Perfect For

- Busy DMs who need quality content quickly
- New DMs building their first campaign world
- Veteran DMs looking for creative inspiration
- Improvisation during unexpected player choices
- Building interconnected story arcs

---

## 🛠️ Technology Stack

This project is built with modern web technologies:

| Category | Technology |
|----------|------------|
| **Frontend** | React 18.3.1 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS 3.x |
| **Components** | shadcn-ui |
| **Icons** | Lucide React |
| **Backend** | Lovable Cloud (Edge Functions) |
| **AI** | Lovable AI Gateway (Gemini 2.5 Flash) |

### Design System
QuestForge features a custom fantasy-themed design with:
- Dark, atmospheric color palette (burgundy, forest green, gold accents)
- Parchment-style textures and weathered aesthetics
- Responsive design for desktop and mobile
- Smooth animations and transitions

---

## 🚀 AI Integration

QuestForge uses **Lovable AI** to generate unique, context-aware D&D content. The integration works through:

1. **Edge Function:** A secure backend function handles all AI requests
2. **Lovable AI Gateway:** Connects to Google Gemini 2.5 Flash model
3. **Structured Output:** Uses tool calling for consistent JSON responses
4. **Tone Adaptation:** System prompt adjusts based on content type (mysterious for plot hooks, tactical for combat, scholarly for lore)

No API keys required—Lovable AI is built into the platform.

---

## 📂 Project Info

**URL**: https://lovable.dev/projects/5536d295-8c52-4a69-ad65-cb04cfca0c61

---

## 🖥️ How to Edit This Code

There are several ways to work with this project:

### Use Lovable
Simply visit the [Lovable Project](https://lovable.dev/projects/5536d295-8c52-4a69-ad65-cb04cfca0c61) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

### Use Your Preferred IDE
If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Edit a File Directly in GitHub
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

### Use GitHub Codespaces
- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

---

## 🌐 Deployment

### How to Deploy
Simply open [Lovable](https://lovable.dev/projects/5536d295-8c52-4a69-ad65-cb04cfca0c61) and click on **Share → Publish**.

### Custom Domain
Yes, you can connect a custom domain!

To connect a domain, navigate to **Project > Settings > Domains** and click **Connect Domain**.

Read more: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 📜 License & Credits

**QuestForge** - A Vibe Coding Project

Created with [Lovable](https://lovable.dev) - The AI-powered web app builder

---

## 🤝 Contributing

This is a prototype project, but suggestions and improvements are welcome! Feel free to fork and experiment with your own D&D content generation ideas.

---

**Happy Questing, Dungeon Masters! 🎲⚔️📜**
