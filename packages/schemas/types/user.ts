import { z } from 'zod';

const userZodSchema = z.object({
  name: z.string(),
  googleId: z.string(),
  email: z.string().email().optional(),
  profilePictureUrl: z.string().url().optional()
});

const createdUserZodSchema = userZodSchema.extend({
  _id: z.string().refine(
      (value) => /^[a-f\d]{24}$/i.test(value)
      ,
      {
        message: '_id is not a valid ObjectId'
      }
  )
});


type User = z.infer<typeof userZodSchema>;
type CreatedUser = z.infer<typeof createdUserZodSchema>;

export { userZodSchema, User, createdUserZodSchema, CreatedUser };
