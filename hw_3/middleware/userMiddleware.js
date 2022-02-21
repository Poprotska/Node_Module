const users = require('../db/users');

module.exports = {
    checkId: (req, res, next) => {
        try {
            const { userId } = req.params;

            if (!Number.isInteger(+userId) || Number.isNaN(+userId)) {
                throw new Error('Not valid ID!');
            }

            const user = users.find (user => user.id === +userId);
            if (!user)
                throw new Error('User already exists!');

            req.user = user;
            next();
        } catch ({ message }) {
            res.redirect(`/error?error=${message}`);
        }
    },

    checkData: (req, res, next) => {
        try {
            const {firstName, lastName, email, password} = req.body;

            if (firstName.length < 3 || lastName.length < 3) {
                throw new Error('Not valid name!');
            }

            if (!email.includes('@')) {
                throw new Error('Not valid email address!');
            }

            if (password.length < 6) {
                throw new Error('Not valid password');
            }
            next();
        } catch ({ message }) {
            res.redirect(`/error?error=${message}`);
        }
    },

    checkUser: ({ body }, res, next) => {
        try {
            const userExist = users.some (user => user.email === body.email);
            if (userExist)
                throw new Error('User already exists!');

            next();
        } catch ({ message }) {
            res.redirect(`/error?error=${message}`);
        }
    }
};