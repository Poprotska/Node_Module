const router = require('express').Router();

const { signInController } = require('../controller/signInController');
const { signInMiddleware } = require('../middleware/signInMiddleware');

router.get('/', signInController.signInControl);
router.post('/', signInMiddleware.signInForm, signInController.signIn);

module.exports = router;