
import { GoogleGenAI } from "@google/genai";
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, SPECIAL_OFFER_PRICE, MAX_SQFT_FOR_OFFER, WARRANTY_YEARS, SHINGLE_LIFE_YEARS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getRoofingResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI assistant for ${COMPANY_NAME}. 
        Key Information:
        - Special Offer: Under $${SPECIAL_OFFER_PRICE} guaranteed if the roof is under ${MAX_SQFT_FOR_OFFER} sqft.
        - Materials: 30-year architectural shingles (Labor and Materials included).
        - Warranty: ${WARRANTY_YEARS} year manufacturer warranty.
        - Contact Phone: ${PHONE_NUMBER}.
        - Contact Email: ${EMAIL}.
        - Services: Roofing Service, Home Improvement.
        
        Keep your responses professional, friendly, and helpful. Always encourage the user to call or email for a formal estimate if they have specific measurements. If they ask about pricing for larger roofs, tell them to call for a custom quote.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly at " + PHONE_NUMBER;
  }
};
