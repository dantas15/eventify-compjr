import { Request, Response } from 'express';
import { AppError } from '@/errors/AppError';
import { Event } from '@/models/Event';
import { eventZodSchema } from '@/types/event';

// TODO: Add user authorization (store user name/id)

export class EventController {
  async all(request: Request, response: Response) {
    try {
      const events = await Event.find();
      return response.json(events);
    } catch {
      throw new AppError('Events not found');
    }
  }

  async create(request: Request, response: Response) {
    const reqData = request.body;

    const validatedData = eventZodSchema.safeParse(reqData);

    if (!validatedData.success) {
      throw new AppError(validatedData.error.message);
    }

    const event = new Event(validatedData.data);

    try {
      await event.save();
      return response.status(201).json(event);
    } catch (err) {
      throw new AppError("Event couldn't be created");
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      throw new AppError('Event id is required');
    }

    const validatedData = eventZodSchema.safeParse(request.body);

    if (!validatedData.success) {
      throw new AppError(validatedData.error.message);
    }

    try {
      const event = await Event.findByIdAndUpdate(id, validatedData.data, {
        // By default, findOneAndUpdate() returns the document as it was before update was applied
        // if you set new: true, findOneAndUpdate() will give you the object after update was applied.
        new: true
      });

      return response.json(event);
    } catch {
      throw new AppError("Event couldn't be updated");
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      throw new AppError('Event id is required');
    }

    try {
      await Event.findByIdAndDelete(id);
      return response.status(204).send();
    } catch {
      throw new AppError("Event couldn't be deleted");
    }
  }

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
      const newEvent = await Event.findByIdAndUpdate(
        id,
        {
          $set: {
            image: file.filename
          }
        },
        { new: true }
      );
      response.json(newEvent);
    } catch (err) {
      console.log(err);
      throw new AppError("Event image couldn't be updated");
    }
  }
}
