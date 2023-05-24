import { Request, Response } from 'express';
import { AppError } from '@/errors/AppError';
import { Event } from '@/models/Event';
import { eventZodSchema } from '@/types/event';
import { validateAndParseISODate } from '@/utils/validateDate';
import {
  deleteImageFromFilename,
  getImageFilePath
} from '@/utils/imageStorage';

export class EventController {
  async all(request: Request, response: Response) {
    const events = await Event.find();
    return response.json(events);
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
    const { userData } = request;
    const { date, ...reqData } = request.body;

    const validDate = validateAndParseISODate(date);

    const validatedData = eventZodSchema.omit({ userId: true }).safeParse({
      ...reqData,
      date: validDate ? validDate : date
    });

    if (!validatedData.success) {
      throw new AppError(validatedData.error.message);
    }

    const event = new Event({ ...validatedData.data, userId: userData.userId });

    try {
      await event.save();
      return response.status(201).json(event);
    } catch (err) {
      console.log({ err });
      throw new AppError("Event couldn't be created");
    }
  }

  async update(request: Request, response: Response) {
    const { userData } = request;
    const { date, ...reqData } = request.body;
    const { id } = request.params;

    if (!id) {
      throw new AppError('Event id is required');
    }

    const event = await Event.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (event.userId !== userData.userId) {
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

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const { userData } = request;

    if (!id) {
      throw new AppError('Event id is required');
    }

    const event = await Event.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (event.userId !== userData.userId) {
      throw new AppError('User not authorized');
    }

    if (event.image) {
      deleteImageFromFilename(getImageFilePath(event.image));
    }

    try {
      await event.deleteOne();
      return response.status(204).send();
    } catch {
      throw new AppError("Event couldn't be deleted");
    }
  }

  async updateFeaturedImage(request: Request, response: Response) {
    const { id } = request.params;
    const { userData, file } = request;

    if (!id) {
      throw new AppError('Event id is required');
    }

    if (!file) {
      throw new AppError('File is required');
    }

    const event = await Event.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    if (event.userId !== userData.userId) {
      throw new AppError('User not authorized');
    }

    if (event.image) {
      deleteImageFromFilename(getImageFilePath(event.image));
    }

    try {
      const updatedEvent = await event.updateOne(
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
