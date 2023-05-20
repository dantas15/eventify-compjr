import { Request, Response } from 'express';
import { AppError } from '@/errors/AppError';
import { Event } from '@/models/Event';
import { eventZodSchema } from '@/types/event';
import { validateAndParseISODate } from '@/utils/validateDate';

export class EventController {
  async all(request: Request, response: Response) {
    try {
      const events = await Event.find();
      return response.json(events);
    } catch {
      throw new AppError('Events not found');
    }
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      throw new AppError('Event id is required');
    }

    try {
      const event = await Event.findById(id);
      return response.json(event);
    } catch {
      throw new AppError('Event not found');
    }
  }

  async create(request: Request, response: Response) {
    const { userId: currentUserId } = request;
    const { date, ...reqData } = request.body;

    const validDate = validateAndParseISODate(date);

    const validatedData = eventZodSchema.omit({ userId: true }).safeParse({
      ...reqData,
      date: validDate
    });

    if (!validatedData.success) {
      throw new AppError(validatedData.error.message);
    }

    const event = new Event({ ...validatedData.data, userId: currentUserId });

    try {
      await event.save();
      return response.status(201).json(event);
    } catch (err) {
      throw new AppError("Event couldn't be created");
    }
  }

  async update(request: Request, response: Response) {
    const { userId } = request;
    const { date, ...reqData } = request.body;
    const { id } = request.params;

    if (!id) {
      throw new AppError('Event id is required');
    }

    const event = await Event.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (event.userId !== userId) {
      throw new AppError('User not authorized');
    }

    const validDate = validateAndParseISODate(date);

    const validatedData = eventZodSchema.safeParse({
      ...reqData,
      date: validDate,
      // do not update image url here
      image: undefined
    });

    if (!validatedData.success) {
      throw new AppError(validatedData.error.message);
    }

    const updatedEvent = await event.updateOne(validatedData.data, {
      // By default, findOneAndUpdate() returns the document as it was before update was applied
      // if you set new: true, findOneAndUpdate() will give you the object after update was applied.
      new: true
    });

    return response.json(updatedEvent);
  }

  // TODO Delete image if it's set
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const { userId } = request;

    if (!id) {
      throw new AppError('Event id is required');
    }

    const event = await Event.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (event.userId !== userId) {
      throw new AppError('User not authorized');
    }

    try {
      await event.deleteOne();
      return response.status(204).send();
    } catch {
      throw new AppError("Event couldn't be deleted");
    }
  }

  // TODO Delete image if it's set
  async updateFeaturedImage(request: Request, response: Response) {
    const { id } = request.params;
    const { file } = request;

    if (!id) {
      throw new AppError('Event id is required');
    }

    if (!file) {
      throw new AppError('File is required');
    }

    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        id,
        {
          $set: {
            image: file.filename
          }
        },
        { new: true }
      );
      response.json(updatedEvent);
    } catch (err) {
      console.log(err);
      throw new AppError("Event image couldn't be updated");
    }
  }
}
