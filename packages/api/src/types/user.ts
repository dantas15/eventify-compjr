import { z } from 'zod';

const userZodSchema = z.object({
  name: z.string(),
  googleId: z.string(),
  email: z.string().email().optional(),
  profilePictureUrl: z.string().url().optional()
});

type User = z.infer<typeof userZodSchema>;

export { userZodSchema, User };
