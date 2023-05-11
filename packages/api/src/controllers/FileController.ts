import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { AppError } from '@/errors/AppError';

export function getImageFilePath(imageFileNameWithExtension: string) {
  return `${path.resolve(`./uploads/images/${imageFileNameWithExtension}`)}`;
}

export class FileController {
  async getImageFromFilename(request: Request, response: Response) {
    const { filename } = request.params;

    const filePath = getImageFilePath(filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        throw new AppError('File not found', 404);
      } else {
        response.sendFile(filePath);
      }
    });
  }
}
