import bcrypt from 'bcryptjs';

const users = [
    {
        "name": 'admin',
        "email": 'admin@gmail.com',
        "password": bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        "name": 'sahana',
        "email": 'sahana@gmail.com',
        "password": bcrypt.hashSync('12345', 10),
        isAdmin: false
    },
    {
        "name": 'bhuvana',
        "email": 'bhuvana@gmail.com',
        "password": bcrypt.hashSync('12345', 10),
        isAdmin: false
    }
];

export default users;