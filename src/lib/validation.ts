import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'contact.validation.required' }),
  phone: z.string().min(5, { message: 'contact.validation.phone' }),
  message: z.string().min(10, { message: 'contact.validation.required' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
