
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getShoppingAdvice = async (cartItems: string[], query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User has in cart: ${cartItems.join(', ')}. User asks: ${query}`,
      config: {
        systemInstruction: "You are a helpful culinary assistant for a grocery delivery app called FreshVeggies. Provide short, appetizing recipe ideas or storage tips for the items the user has or is asking about. Keep it friendly and concise.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble thinking of a recipe right now, but those veggies look great!";
  }
};
