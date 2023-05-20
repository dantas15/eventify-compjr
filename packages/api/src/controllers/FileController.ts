import fs from 'fs';
import { Request, Response } from 'express';
import { AppError } from '@/errors/AppError';
import { getImageFilePath } from '@/utils/imageStorage';

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

  async deleteImageFromFilename(request: Request, response: Response) {
    const { filename } = request.params;

    const filePath = getImageFilePath(filename);

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        throw new AppError('File not found', 404);
      } else {
        fs.unlink(filePath, (err) => {
          if (err) {
            throw new AppError('File to be deleted not found', 404);
          } else {
            return response.status(204).send();
          }
        });
      }
    });
  }
}
