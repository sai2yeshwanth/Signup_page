"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signup = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Signup extends sequelize_1.Model {
}
exports.Signup = Signup;
Signup.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    sequelize: database_1.db,
    tableName: "user",
});
// export default Signup;
