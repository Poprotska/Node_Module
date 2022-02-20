const router = require('express').Router();

const { userController } = require('../controller/userController');
const { userMiddleware } = require('../middleware/userMiddleware');

router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkId,
    userMiddleware.checkUser,
    userController.getUserById
);
router.post('/:userId',
    userMiddleware.checkId
    // userController.deleteUserById
    );

module.exports = router;