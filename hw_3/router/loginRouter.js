const router = require('express').Router();

const { loginController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', loginController.createUserForm);
router.post('/', userMiddleware.checkData, loginController.createUser);

module.exports = router;