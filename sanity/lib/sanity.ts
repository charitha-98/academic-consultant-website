import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url'; // 👈 'imageUrlBuilder' වෙනුවට මෙහෙම දාන්න

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', 
  useCdn: true, 
});

// 👈 මෙතනට 'createImageUrlBuilder' පාවිච්චි කරන්න
const builder = createImageUrlBuilder(client as any); 

export function urlFor(source: any) {
  return builder.image(source);
}