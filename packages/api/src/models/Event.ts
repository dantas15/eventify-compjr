import { Schema, model } from 'mongoose';
import { Event as EventType } from '@eventify/schemas';

const eventSchema = new Schema<EventType>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: Date, required: true },
  location: { type: String, required: false },
  image: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

const eventModel = model('Event', eventSchema);
export { eventModel as Event };
