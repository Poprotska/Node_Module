const fs = require('fs');
const path = require('path');

const onlineUsers = [
    {
        name: 'Tamara',
        age: 24,
        city: 'Lviv'
    },
    {
        name: 'Alina',
        age: 28,
        city: 'Odessa'
    },
    {
        name: 'Iryna',
        age: 38,
        city: 'Rivne'
    }
];

const inPersonUsers = [
    {
        name: 'Oleg',
        age: 24,
        city: 'Lviv'
    },
    {
        name: 'Dima',
        age: 19,
        city: 'Rivne'
    },
    {
        name: 'Roman',
        age: 23,
        city: 'Lviv'
    }
];

const onlineUser = path.join(__dirname, 'main', 'online', 'online.txt');
const inPersonUser = path.join(__dirname, 'main', 'inPerson', 'inPerson.txt');


fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        onlineUsers.forEach(user => {
            for (id in user) {
                fs.appendFile(onlineUser, `\n${id.toUpperCase()}:${user[id]}`, (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }

                    })
            }

        })
        inPersonUsers.forEach(user => {
            for (id in user) {
                fs.appendFile(inPersonUser, `\n${id.toUpperCase()}:${user[id]}`, (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    })
            }
        })
        fs.readFile(onlineUser, (err, dataOnline) => {
            if (err) {
                console.log(err);
                throw err;
            }
            fs.readFile(inPersonUser, (err, dataInPerson) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                fs.writeFile(onlineUser, dataInPerson, (err) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    fs.writeFile(inPersonUser, dataOnline, (err) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                    })
                })
            })
        })
    })
})