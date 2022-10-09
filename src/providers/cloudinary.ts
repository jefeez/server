import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { Readable } from 'stream';
import { configuration } from '@env/cloudinary';

v2.config({ ...configuration });

const cloudinary = (
  file: Express.Multer.File,
  folder: string
): Promise<UploadApiResponse | UploadApiErrorResponse> =>
  new Promise((resolve, reject) => {
    const upload = v2.uploader.upload_chunked_stream({ folder }, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    Readable.from(file.buffer).pipe(upload);
  });

export default cloudinary;
