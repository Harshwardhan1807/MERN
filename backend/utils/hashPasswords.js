const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const comparePasswords = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = { hashPassword, comparePasswords } 