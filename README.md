README.md
# ⚡ CoachAI — Frontend

CoachAI is a web-based AI-assisted drawing platform. Users can type natural language commands (e.g., "Draw a circle in the center"), and the system automatically executes actions on the canvas while logging each step in a transcript panel.

---

## **Project Workflow**

### 1. User Instruction
User types a natural language command like:


"Draw a circle in the center"


### 2. Agent Interpretation (GPT-5)
The GPT-5 Agent converts the command into structured JSON steps:

Example:
```json
[
  { "select_tool": "circle" },
  { "draw_shape": "center" },
  { "apply_style": "highlight" }
]

3. Auto Execution on Canvas

Steps are executed live.

Canvas dims, tool highlights.

Shape appears instantly—no drag & drop required.

4. Transcript Logging

Each action is logged with:

Timestamp

Step description

Small canvas preview

5. Interactive Transcript

Hover over a transcript step to replay that exact action visually.

6. Sequential Multi-step Execution

Complex commands (e.g., "Draw a triangle inside a circle & color it red") are broken into sub-steps.

Each sub-step is executed sequentially and logged.

7. Export Transcript

At session end, users can export:

Session title

Step list with timestamps

Screenshots/previews after each step (PDF/Word)

8. Replay Session (Optional)

Full session replay like a time-lapse for review.

In short:
CoachAI takes natural language → auto-executes on canvas → logs every step → lets users replay or export the session.

Tech Stack

React + TypeScript

Tailwind CSS for styling

Lucide-react icons for UI

React Hooks & Context API

Installation

Clone the repo:

git clone <your-repo-url>
cd frontend


Install dependencies:

npm install


Start the dev server:

npm run dev


Open the app:

http://localhost:3000

Build for Production
npm run build
npm start

Folder Structure
src/
 ├─ components/
 │   ├─ Canvas/Canvas.tsx
 │   ├─ Ribbon.tsx
 │   ├─ TranscriptPanel.tsx
 │   ├─ Chatbot.tsx
 ├─ coachAI/
 │   └─ CoachAI.ts
 ├─ App.tsx
