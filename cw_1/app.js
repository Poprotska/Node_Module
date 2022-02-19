const fs = require('fs');
const path = require('path')

//Task 1

// 1. Спробуйте створити якийсь файл txt,
// прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл

//
// fs.mkdir(path.join(__dirname, 'TASK-1'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//
//     fs.writeFile(path.join(__dirname, 'TASK-1', 'TASK-1.txt'), 'TASK #1 CLASSWORK !!!', (err) => {
//         if (err) {
//             console.log(err);
//         }
//
//         fs.readFile(path.join(__dirname, 'TASK-1', 'TASK-1.txt'), 'utf8', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             console.log(data)
//
//             fs.mkdir(path.join(__dirname, 'TEXT'), (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//
//                 fs.rename(path.join(__dirname, 'TASK-1', 'TASK-1.txt'), path.join(__dirname, 'TEXT', 'TASK-1.txt'), (err) => {
//                     if (err) {
//                         console.log(err)
//                     }
//                 })
//             })
//         })
//     })
// });


// TASK-2

// Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться.

//
// fs.mkdir(path.join(__dirname, 'TASK-2'), (err) => {
//     if (err) {
//         console.log(err);
//     }
//
//     fs.writeFile(path.join(__dirname, 'TASK-2', 'TASK-2.txt'), 'name:PETRO, \nage:19, \ncity:Rivne', (err) => {
//         if (err) {
//             console.log(err);
//         }
//
//         fs.readFile(path.join(__dirname, 'TASK-2', 'TASK-2.txt'), 'utf8', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             console.log(data)
//
//             fs.mkdir(path.join(__dirname, 'TEXT-2'), (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//
//                 fs.rename(path.join(__dirname, 'TASK-2', 'TASK-2.txt'), path.join(__dirname, 'TEXT-2', 'TASK-2.txt'), (err) => {
//                     if (err) {
//                         console.log(err)
//                     }
//
//                     fs.rmdir(path.join(__dirname, 'TASK-2'), (err) => {
//                         if (err) {
//                             console.log(err)
//                         }
//                     })
//                 })
//             })
//         })
//     })
// });

// TASK-3
// Створіть папку (можете вручну)
// напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти, якщо дані які в ній лежать -
// це файли: тоді вам потрібно їх очистити, але не видаляти,
// це папки: вам потрібно їх перейменувати і додати до назви префікс _new

fs.mkdir(path.join(__dirname, 'TASK-3', 'BODY'),  {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }

    for (let i = 0; i < 10; i++) {
        fs.writeFile(path.join(__dirname, 'TASK-3', 'TASK-3.txt'), '\nDATA', {flag: 'a'}, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }

            fs.readdir(path.join(__dirname, 'TASK-3'), (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log(data)

                for (let item of data) {
                    fs.stat(path.join(__dirname, 'TASK-3', `${item}`), (err, stat) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }

                        if (stat.isFile() === true) {
                            fs.truncate(path.join(__dirname, 'TASK-3', `${item}`), (err) => {
                                if (err) {
                                    console.log(err);
                                    throw err;
                                }
                            })

                        } else if (stat.isDirectory() === true) {
                            fs.rename(path.join(__dirname, 'TASK-3', `${item}`), path.join(__dirname, 'TASK-3', `_new${item}`), (err) => {
                                if (err) {
                                    console.log(err);
                                    throw err;
                                }
                            })

                        } else {
                            console.log('error');
                        }
                    })
                }
            })
        })
    }
});