import * as Joi from 'joi';

import { commonValidator } from '../common/common.validator';
import {Segments} from "celebrate";

export const authValidator = {
    login: {
        [Segments.BODY]: Joi.object({
            email: commonValidator.emailValidator,
            password: Joi.string().required().min(8)
        })
    },
};
