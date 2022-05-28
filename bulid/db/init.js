"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const isDev = process.env.NODE_ENV === 'development';
const dbInit = () => {
    User_1.User.sync({ alter: isDev });
};
exports.default = dbInit;
//# sourceMappingURL=init.js.map