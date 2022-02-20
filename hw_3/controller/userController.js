let { users } = require('../db/users');

module.exports = {
    getAllUsers: ({ query }, res) => {
        if (Object.keys(query).length) {
            let usersArray = [...users];

            if (query.city) {
                usersArray = usersArray.filter(user => user.city === query.city);
            }

            if (query.age) {
                usersArray = usersArray.filter(user => user.age === query.age);
            }

            res.render('users', { users: usersArray });
            return;
        }

        res.render('users', { users });
    },

    getUserById: ({ params, user }, res) => {
        res.render('userInfo', { user });
    }
};

module.exports = {
    userController: require('./userController')
};