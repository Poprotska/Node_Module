const users = require('../db/users');

module.exports = {
    signInForm: (req, res, next) => {
        try {
            const {email, password} = req.body;

            const user = users.find(user => user.email === email && user.password === password);
            if (!user)
                throw new Error('Try again!');

            req.user = user
            next();
        } catch ({ message }) {
            res.redirect(`/error?error=${message}`);
        }
    }
}

