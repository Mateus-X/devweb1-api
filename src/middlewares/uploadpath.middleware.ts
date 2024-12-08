import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()

export class EnsureUploadProjectsPathExistsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const uploadPath = path.join(__dirname, '..', '..', 'uploads', 'projects');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    next();
  }
}

export class EnsureUploadDevelopersPathExistsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const uploadPath = path.join(__dirname, '..', '..', 'uploads', 'developers');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    next();
  }
}