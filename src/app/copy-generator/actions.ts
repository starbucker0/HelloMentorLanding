'use server';

import { generateHeroMarketingCopy } from '@/ai/flows/generate-marketing-copy';
import { z } from 'zod';

const copySchema = z.object({
  appPurpose: z.string().min(10, 'Please provide a more detailed purpose.'),
  keywords: z.string().min(3, 'Please provide at least one keyword.'),
});

export async function generateCopyAction(prevState: any, formData: FormData) {
  const validatedFields = copySchema.safeParse({
    appPurpose: formData.get('appPurpose'),
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await generateHeroMarketingCopy({
      appPurpose: validatedFields.data.appPurpose,
      keywords: validatedFields.data.keywords,
    });
    return {
      message: 'Success',
      errors: null,
      data: result.variations,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred.',
      errors: null,
      data: null,
    };
  }
}
