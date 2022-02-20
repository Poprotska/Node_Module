const router = require('express').Router();

const loginRouter = require('./loginRouter');
const userRouter = require('./userRouter');
const signInRouter = require('./signInRouter');

router.use('/login', loginRouter);
router.use('/users', userRouter);
router.use('/signIn', signInRouter);

router.get('/error', ({ query }, res) => {
    res.render('error', { error: query.error });
});
router.use((req, res) => {
    res.render('notFound');
});

module.exports = router;

module.exports = {
    apiRouter: require('./apiRouter')
};