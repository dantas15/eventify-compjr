import { z } from 'zod';
import { isStringValidObjectId } from "../utils/objectIdString";
import { CreatedUser } from "./user";

const eventZodSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().min(new Date(), { message: 'Date must be in the future' }),
  durationInMinutes: z.number().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  userId: z.string().or(z.any()),
});

const createdEventZodSchema = eventZodSchema.extend({
  _id: z.string().refine(
      (value) => isStringValidObjectId(value)
      ,
      {
        message: '_id is not a valid ObjectId'
      }
  ),
  date: z.string(),
});

type Event = z.infer<typeof eventZodSchema>;
type CreatedEvent = Omit<z.infer<typeof createdEventZodSchema>, "userId"> & {
  userId: CreatedUser;
};

export { eventZodSchema, createdEventZodSchema, Event, CreatedEvent };
