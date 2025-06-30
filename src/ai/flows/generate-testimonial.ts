// use server'
'use server';

/**
 * @fileOverview Generates example testimonials given a prompt describing a target customer.
 *
 * - generateTestimonial - A function that handles the testimonial generation process.
 * - GenerateTestimonialInput - The input type for the generateTestimonial function.
 * - GenerateTestimonialOutput - The return type for the generateTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialInputSchema = z.object({
  customerDescription: z
    .string()
    .describe('A description of the target customer for whom to generate a testimonial.'),
});
export type GenerateTestimonialInput = z.infer<typeof GenerateTestimonialInputSchema>;

const GenerateTestimonialOutputSchema = z.object({
  testimonial: z.string().describe('The generated testimonial.'),
});
export type GenerateTestimonialOutput = z.infer<typeof GenerateTestimonialOutputSchema>;

export async function generateTestimonial(input: GenerateTestimonialInput): Promise<GenerateTestimonialOutput> {
  return generateTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTestimonialPrompt',
  input: {schema: GenerateTestimonialInputSchema},
  output: {schema: GenerateTestimonialOutputSchema},
  prompt: `You are a marketing expert specializing in writing compelling testimonials.

  Given the description of the target customer, generate a testimonial that highlights the benefits of the product/service for that customer.

  Target Customer Description: {{{customerDescription}}}
  `,
});

const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: GenerateTestimonialInputSchema,
    outputSchema: GenerateTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
