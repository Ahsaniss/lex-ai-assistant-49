
# Lex AI Assistant

Lex AI Assistant is a professional AI-powered legal assistant web application designed to help users with legal queries related to Pakistani law. The assistant, named **Advocaid**, provides guidance in both English and Urdu, referencing the Pakistani Constitution, PPC, CPC, and relevant court precedents. The project is built for accessibility, bilingual support, and a modern user experience.

## Features

- AI-powered chat interface for legal questions
- Bilingual support: English and Urdu
- Category-based expertise (Family Law, Property Law, Criminal Law, Business Law)
- Responsive design for desktop and mobile
- Copy, like, and dislike feedback for bot responses
- Legal disclaimers and professional formatting

## Technologies Used

- **Vite** – Fast build tool
- **React** – UI library
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn-ui** – Modern UI components
- **Google Generative AI (Gemini)** – AI backend

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd lex-ai-assistant
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Google Generative AI API key:
     ```env
     VITE_GOOGLE_AI_API_KEY=your_api_key_here
     ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```
5. **Open the app:**
   - Visit `http://localhost:5173` in your browser.

## Usage

- Select your preferred language (English, Urdu, or Both).
- Choose a legal category for specialized advice.
- Type your legal question and receive AI-powered guidance.
- Copy, like, or dislike bot responses for feedback.

## Deployment

You can deploy this project using Vercel, Netlify, or any static hosting provider. For Lovable platform users, simply use the Share → Publish feature.

## Custom Domain

To connect a custom domain, follow your hosting provider's instructions or, if using Lovable, go to Project > Settings > Domains and click Connect Domain.

## License

This project is licensed under the MIT License.

## Legal Disclaimer

Advocaid provides general legal information based on Pakistani law. For specific legal advice, consult a qualified Pakistani advocate licensed by the Pakistan Bar Council.
