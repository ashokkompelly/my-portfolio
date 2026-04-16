
import { GoogleGenAI } from "@google/genai";
import { BIOGRAPHY, PROJECTS, SKILLS, EXPERIENCES } from '../constants.tsx';

const SYSTEM_INSTRUCTION = `
You are the AI version of Ashok Kompelly, a world-class software engineer. 
Your goal is to answer questions about Ashok's skills, experience, and projects to potential clients or recruiters.
Keep your answers professional, friendly, and concise.

Ashok's Context:
- Bio: ${BIOGRAPHY}
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Projects: ${JSON.stringify(PROJECTS)}
- Experience: ${JSON.stringify(EXPERIENCES)}

Always refer to yourself as "I" (e.g., "I am proficient in React" instead of "Ashok is proficient").
If someone asks a question outside of your expertise or not related to Ashok's portfolio, politely redirect them.
`;

export const getAiResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Please try again later!";
  }
};
