// This file is machine-generated - edit at your own risk.
'use server';
/**
 * @fileOverview An AI agent that generates marketing copy variations for a landing page hero section.
 *
 * - generateHeroMarketingCopy - A function that generates marketing copy variations.
 * - GenerateHeroMarketingCopyInput - The input type for the generateHeroMarketingCopy function.
 * - GenerateHeroMarketingCopyOutput - The return type for the generateHeroMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroMarketingCopyInputSchema = z.object({
  appPurpose: z.string().describe('Brief description of the app\'s purpose.'),
  keywords: z.string().describe('Comma-separated keywords related to the app.'),
  numVariations: z.number().default(3).describe('Number of marketing copy variations to generate.'),
});
export type GenerateHeroMarketingCopyInput = z.infer<typeof GenerateHeroMarketingCopyInputSchema>;

const GenerateHeroMarketingCopyOutputSchema = z.object({
  variations: z.array(
    z.object({
      headline: z.string().describe('Generated headline for the hero section.'),
      description: z.string().describe('Generated description for the hero section.'),
    })
  ).describe('Array of marketing copy variations.'),
});
export type GenerateHeroMarketingCopyOutput = z.infer<typeof GenerateHeroMarketingCopyOutputSchema>;

export async function generateHeroMarketingCopy(input: GenerateHeroMarketingCopyInput): Promise<GenerateHeroMarketingCopyOutput> {
  return generateHeroMarketingCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroMarketingCopyPrompt',
  input: {schema: GenerateHeroMarketingCopyInputSchema},
  output: {schema: GenerateHeroMarketingCopyOutputSchema},
  prompt: `You are a marketing expert specializing in creating compelling hero sections for landing pages.

  Generate {{numVariations}} variations of headline and description for a web application with the following purpose:
  {{appPurpose}}

  The following keywords should be considered when creating the copy: {{keywords}}

  Each variation should have a distinct headline and a concise, engaging description. The goal is to capture user attention and clearly communicate the value proposition of the app.

  Your output should be a JSON array of objects, each containing a "headline" and a "description" field.

  Example:
  [
    {
      "headline": "Revolutionize Your Workflow with [App Name]",
      "description": "[App Name] is the ultimate solution for streamlining your tasks and boosting productivity. Discover the power of effortless organization today!"
    },
    {
      "headline": "Unlock Your Potential with [App Name]",
      "description": "Transform your ideas into reality with [App Name]. Our intuitive platform empowers you to create, collaborate, and achieve your goals faster than ever before."
    }
  ]
  `,
});

const generateHeroMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateHeroMarketingCopyFlow',
    inputSchema: GenerateHeroMarketingCopyInputSchema,
    outputSchema: GenerateHeroMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
