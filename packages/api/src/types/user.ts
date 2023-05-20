import { z } from 'zod';
import { ObjectId, isValidObjectId } from 'mongoose';

const userZodSchema = z.object({
  name: z.string(),
  googleId: z.string(),
  email: z.string().email().optional(),
  profilePictureUrl: z.string().url().optional()
});

const createdUserZodSchema = userZodSchema.extend({
  _id: z.custom<ObjectId>(
    (value) => isValidObjectId(value),
    '_id is not a valid ObjectId'
  )
});

type User = z.infer<typeof userZodSchema>;
type CreatedUser = z.infer<typeof createdUserZodSchema>;

export { userZodSchema, User, createdUserZodSchema, CreatedUser };
