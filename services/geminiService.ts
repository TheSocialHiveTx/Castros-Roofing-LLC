
import { GoogleGenAI } from "@google/genai";
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, WARRANTY_YEARS, SHINGLE_LIFE_YEARS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRoofingResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI assistant for ${COMPANY_NAME}. 
        Key Information:
        - Materials: 30-year architectural shingles (Labor and Materials included).
        - Warranty: ${WARRANTY_YEARS} year manufacturer warranty.
        - Contact Phone: ${PHONE_NUMBER}.
        - Contact Email: ${EMAIL}.
        - Services: Roofing Service, Home Improvement.
        
        Keep your responses professional, friendly, and helpful. Always encourage the user to call or email for a formal estimate.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly at " + PHONE_NUMBER;
  }
};
