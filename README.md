# Aventra.ai — AI-Powered Interactive Story Generator

**Aventra.ai** is an AI-driven web application that creates interactive, choose-your-own-adventure stories for children and creative writers. It combines AI text and image generation with a friendly, colorful UI so users can generate personalized, branching stories with illustrations, save progress, and share adventures.

---

## Interactive Story Generator

Aventra.ai generates interactive, branching stories using AI. Each user choice changes the narrative path so every playthrough can lead to unique outcomes.

### ✨ Key Features

* **AI-generated storylines** with branching choices and dynamic dialogue.
* **Interactive navigation**: readers pick options to change the plot.
* **AI-generated illustrations** to match scenes.
* **Save, share & continue** stories across sessions.
* **Real-time generation** with progress/loading indicators.
* **Responsive, child-friendly UI** with smooth animations.
* **RESTful API backend** for integrations.

---

## Tech Stack

### Backend

* **FastAPI** — High-performance API framework.
* **LangChain + OpenAI** — AI story generation and orchestration.
* **SQLAlchemy** — ORM for database models.
* **PostgreSQL** — Persistent storage for stories and jobs.
* **Pydantic** — Data validation and settings management.

### Frontend

* **React** — Component-based UI.
* **Vite** — Fast dev server and build tool.
* **Axios** — HTTP client.
* **React Router** — Client-side routing.
* **Styling:** Tailwind CSS, Framer Motion, and custom CSS variables.

---

## Installation

### Prerequisites

* Python 3.13+
* Node.js (latest LTS recommended)
* PostgreSQL database

### Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install dependencies (using `uv` or `pip`):

```bash
uv sync
# or
pip install -r requirements.txt
```

3. Configure environment variables:

* Copy `.env.example` → `.env` and set your OpenAI API key and `DATABASE_URL`.

4. Run the backend server:

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (Vite default).

---

## Usage

1. Ensure both backend and frontend are running.
2. Open the frontend URL in a browser.
3. Enter a story theme and click **Generate Story**.
4. Navigate the story by selecting choices at each step.
5. Use controls to save, restart, or create a new story.

---

## API Documentation

Interactive docs are provided by FastAPI:

* **Swagger UI:** `http://localhost:8000/docs`
* **ReDoc:** `http://localhost:8000/redoc`

### Main Endpoints

* `POST /api/stories/generate` — Generate a new story

  * Body: `{ "theme": "your story theme" }`
* `GET /api/stories/{story_id}/complete` — Retrieve complete story data
* `GET /api/jobs/{job_id}` — Check generation job status

---

## Development

### Backend

* Run with auto-reload: `uvicorn main:app --reload`
* Database migrations: handled automatically on startup
* Tests: add tests under `tests/`

### Frontend

* Dev server: `npm run dev`
* Build production: `npm run build`
* Linting: `npm run lint`
* Preview build: `npm run preview`

---

## Project Structure

```
story-generator/
├── backend/
│   ├── core/           # Core functionality (config, models, prompts)
│   ├── db/             # Database setup and connections
│   ├── models/         # SQLAlchemy models
│   ├── routers/        # API route handlers
│   ├── schemas/        # Pydantic schemas
│   └── main.py         # FastAPI application entry point
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── App.jsx     # Main app component
│   │   ├── App.css     # Global styles
│   │   └── main.jsx    # React entry point
│   └── package.json    # Frontend dependencies
└── README.md           # This file
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make changes and add tests.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

---

## Vision

To make storytelling more creative, interactive, and accessible by blending human imagination with AI-powered generation — suited for play, education, and creative writing.
=======
# Aventra.ai
🪄 Aventra.ai is an AI-powered web app that creates interactive, choose-your-own-adventure stories. It combines AI text and image generation with a fun, child-friendly UI, letting users shape dynamic storylines, explore creativity, and enjoy personalized storytelling experiences.
