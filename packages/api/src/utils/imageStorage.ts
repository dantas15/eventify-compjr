import fs from 'fs';
import path from 'path';
import { AppError } from '@/errors/AppError';

function getImageFilePath(imageFileNameWithExtension: string) {
  return `${path.resolve(`./uploads/images/${imageFileNameWithExtension}`)}`;
}

function deleteImageFromFilename(imageFileNameWithExtension: string) {
  const filePath = getImageFilePath(imageFileNameWithExtension);

  fs.unlink(filePath, (err) => {
    if (err) {
      throw new AppError('File to be deleted not found', 404);
    }
  });
}

export { getImageFilePath, deleteImageFromFilename };
