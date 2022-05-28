"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUser = void 0;
const toUser = (user) => {
    return {
        id: user.id,
        lastname: user.lastname,
        firstname: user.firstname,
        username: user.username,
        eamilId: user.eamilId,
        mobilenumber: user.mobilenumber,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    };
};
exports.toUser = toUser;
//# sourceMappingURL=mapper.js.map