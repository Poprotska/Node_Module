const router = require('express').Router();

const { signInController } = require('../controller');
const { signInMiddleware } = require('../middleware');

router.get('/', signInController.signInControl);
router.post('/', signInMiddleware.signInForm, signInController.signIn);

module.exports = router;