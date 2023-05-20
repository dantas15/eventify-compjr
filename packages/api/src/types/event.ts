import { z } from 'zod';

const eventZodSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().min(new Date(), { message: 'Date must be in the future' }),
  durationInMinutes: z.number().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  userId: z.string()
});

type Event = z.infer<typeof eventZodSchema>;

export { eventZodSchema, Event };
