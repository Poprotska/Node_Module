const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkId,
    userMiddleware.checkUser,
    userController.getUserById
);
router.post('/:userId',
    userMiddleware.checkId );

module.exports = router;
