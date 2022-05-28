import { DataTypes, Model, Optional } from "sequelize";
import { string } from "yup";
import {db} from '../database'

interface UserAttributes {
	id: number;
	lastname: string;
	firstname: string;
	username: string;
	eamilId: string;
	mobilenumber: string;
	password: string;

	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}


export class User extends Model<UserInput> implements UserAttributes{
	public id!: number;
	public lastname!: string;
	public firstname!: string;
	public username!: string;
	public eamilId!: string;
	public mobilenumber!:string;
	public password!: string;


	public readonly createdAt!: Date;
  	public readonly updatedAt!: Date;
  	public readonly deletedAt!: Date;
}

 

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			unique: true,
			primaryKey: true,
			autoIncrement: true,
		},
		firstname:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname:{
			type: DataTypes.STRING,
			allowNull: false,

		},

		username:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		eamilId: {
			type:DataTypes.STRING,
			allowNull: false,
		},
		mobilenumber:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		password:{
			type: DataTypes.STRING,
			allowNull:false,
		}

	},
	{
		timestamps: true,
		sequelize:  db,
		tableName: "user",
	}
);

 export default User;