
import { GoogleGenAI } from "@google/genai";

// Create the AI instance inside the function to ensure the latest API key is used
export async function askAquaAssistant(userPrompt: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      // Using gemini-3-pro-preview for complex reasoning tasks like aquaculture consultancy
      model: 'gemini-3-pro-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are the 'Kasun Aqua Farm AI Assistant'. You are an expert in ornamental fish farming, specifically in the context of Sri Lanka. Your goal is to help users with fish care, breeding tips, farm setup, and questions about Kasun Aqua Farm's services. Keep responses professional, helpful, and concise. Always encourage them to contact Kasun via WhatsApp (+94 77 476 0866) for direct orders or specialized consultancy.",
        temperature: 0.7,
      },
    });

    // Directly access the .text property
    return response.text || "I'm sorry, I couldn't process that request. Please try again or contact us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our expert is currently busy tending to the ponds. Please reach out to us via WhatsApp for immediate assistance!";
  }
}
