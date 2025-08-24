README.md
# ⚡ CoachAI — Frontend

**CoachAI-FE** is the frontend for **CoachAI** — an AI-powered interactive coaching assistant. It connects with any app or software and guides users through tasks, learning by doing and adapting to provide smarter and faster assistance.  

---

## 🖥 Main Purpose

- Serve as a **coach for any app/software**.  
- Learn user behavior and adapt instructions dynamically.  
- Provide **step-by-step guidance** in real time.  
- Support interactive tasks, visual feedback, and transcripts.  

---

## 🖌 Key Features

- **Natural Language Commands:** Users can type instructions in plain English.  
- **Interactive Canvas:** Visualize steps and actions on canvas for better understanding.  
- **Transcript Panel:** Keeps a history of commands with timestamps; replay past actions.  
- **Export PDF:** Save session transcripts for reference.  
- **Smart Guidance:** Connects to different apps, learns by doing, and adapts advice.  
- **Customizable UI:** Select shapes, colors, and actions dynamically.  

---

## 📂 Project Structure
CoachAI-FE/
│
├── public/
├── src/
│ ├── components/
│ │ ├── CanvasArea.tsx
│ │ ├── Chatbot.tsx
│ │ ├── Ribbon.tsx
│ │ └── TranscriptPanel.tsx
│ ├── App.tsx
│ └── index.tsx
├── package.json
├── tsconfig.json
└── README.md


## **Project Workflow**

### 1. User Instruction
User types a natural language command like:


"Draw a circle in the center"


### 2. Agent Interpretation (GPT-5)
The GPT-5 Agent converts the command into structured JSON steps.

### 3. Auto Execution on Canvas
 
Steps are executed live.

Canvas dims, tool highlights.

Shape appears instantly—no drag & drop required.

### 4. Transcript Logging

Each action is logged with:

Timestamp

Step description

Small canvas preview

### 5. Interactive Transcript

Hover over a transcript step to replay that exact action visually.

### 6. Sequential Multi-step Execution

Complex commands (e.g., "Draw a triangle inside a circle & color it red") are broken into sub-steps.

Each sub-step is executed sequentially and logged.

### 7. Export Transcript

At session end, users can export:

Session title

Step list with timestamps

Screenshots/previews after each step (PDF/Word)

### 8. Replay Session (Optional)

Full session replay like a time-lapse for review.

In short:
CoachAI takes natural language → auto-executes on canvas → logs every step → lets users replay or export the session.

### Tech Stack

React + TypeScript

Tailwind CSS for styling

Lucide-react icons for UI

React Hooks & Context API

### Installation

Clone the repo:

git clone <your-repo-url>
cd frontend


### Install dependencies:

npm install


### Start the dev server:

npm run dev


### Open the app:

http://localhost:3000

### Build for Production
npm run build
npm start
Open the app in your browser (usually http://localhost:5173).

### 🛠 Technology Stack

Frontend: React + TypeScript

Styling: Tailwind CSS

Interactive Canvas: HTML5 Canvas API

PDF Export: jsPDF + html2canvas

AI Assistance: GPT-5 + AIML API

### 🔧 Usage

Use the Chatbot panel or Ribbon to give commands.

Commands like "Draw a blue square" or "Create a triangle" will be visualized on canvas.

Hover over transcript items to replay past commands.

Click Export to PDF to save the session.

Connect to any new app or software to get real-time, adaptive guidance powered by AI.

### 🔗 Repositories

Frontend: https://github.com/SanaAdeelKhan/CoachAI-FE

Backend: https://github.com/MateehUllah/backend_coach-ai-hackathons

### 📄 License

MIT License.
