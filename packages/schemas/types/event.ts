import { z } from 'zod';
import { isStringValidObjectId } from "../utils/objectIdString";

const eventZodSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().min(new Date(), { message: 'Date must be in the future' }),
  durationInMinutes: z.number().optional(),
  location: z.string().optional(),
  image: z.string().optional(),
  userId: z.string()
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
type CreatedEvent = z.infer<typeof createdEventZodSchema>;

export { eventZodSchema, createdEventZodSchema, Event, CreatedEvent };
