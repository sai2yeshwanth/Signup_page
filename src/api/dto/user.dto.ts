import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    id: number;
	lastname: string;
	firstname: string;
	username: string;
	eamilId: string;
	mobilenumber: string;
	password: string;

}

export type UpdateUserDTO = Optional<CreateUserDTO,"id" >

export type FilterUserDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}