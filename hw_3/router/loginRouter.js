const router = require('express').Router();

const { loginController } = require('../controller/loginController');
const { userMiddleware } = require('../middleware/userMiddleware');

router.get('/', loginController.createUserForm);
router.post('/', userMiddleware.checkData, loginController.createUser);

module.exports = router;