export interface User {
    id: number;
	lastname: string;
	firstname: string;
	username: string;
	eamilId: string;
	mobilenumber: string;
	password: string;


    createdAt: Date
    updatedAt: Date
    deletedAt?: Date 
  }