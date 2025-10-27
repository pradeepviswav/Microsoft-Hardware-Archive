
import { GoogleGenAI } from "@google/genai";

export const getFunFact = async (productName: string, productDescription: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "API key is not configured. Please set the API_KEY environment variable.";
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Tell me a single, fun, and little-known fact about the Microsoft product "${productName}". Here is a short description for context: "${productDescription}". Keep the fact concise, engaging, and under 50 words.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating fun fact:", error);
    return "Sorry, I couldn't come up with a fun fact right now. Please try again later.";
  }
};
