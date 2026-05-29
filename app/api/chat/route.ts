import { createOpenAI } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
    You are an expert Academic Consultant Assistant named "AcademicAI". 
    Your job is to help university students with their assignment doubts, essays, thesis formatting, and research methodologies.
    Be professional, encouraging, and friendly.
    If a student asks about doing an assignment, guide them on how to structure it, but tell them to click the "Contact on WhatsApp" button to get custom expert help and pricing.
    Keep answers concise and well-formatted using bullet points if needed.
  `;

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    // 👈 Version 6 එකේ මැසේජ් format එක AI එකට ගැලපෙන්න මෙහෙම convert කරන්න ඕනේ
    messages: await convertToModelMessages(messages), 
    system: systemPrompt,
  });

  // 👈 Front-end එකේ UI එකට හරියටම stream එක ගැලපෙන්න මෙන්න මේ response එක දෙන්න ඕනේ මචං
  return result.toUIMessageStreamResponse();
}