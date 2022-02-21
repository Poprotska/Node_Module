module.exports = {
    signInControl: (req, res) => {
        res.render('signIn');
    },

    signIn: ({ user }, res) => {
        res.redirect(`/users/${user.id}`);
    }
};
