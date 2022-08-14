import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../interfaces';
import { userRepository } from '../repositories/user/userRepository';
import {ErrorHandler} from "../error/errorHandler";

class UserMiddleware {
    async checkIsUserExists(req: IRequestExtended, res: Response, next: NextFunction): Promise<void> {
        try {
            const userFromDB = await userRepository.getUserByEmail(req.body.email);

            if (!userFromDB) {
                next(new ErrorHandler('User not found', 401));
                return;
            }
            req.user = userFromDB;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const userMiddleware = new UserMiddleware();
