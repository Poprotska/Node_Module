import { Router } from 'express';

import { userRouter } from './userRouter';
import { authRouter } from './authRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
// @ts-ignore
router.use('*', (err, req, res, next) => {
    console.log('__________');
    console.log(err);
    console.log('__________');

    res.status(err.code || 500).json(err.message);
});

export const apiRouter = router;
