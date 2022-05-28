
import { Dialect, Sequelize } from 'sequelize';



export const db = new Sequelize('yeshwanth', 'postgres', 'password', {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

export const connect = async () : Promise<any> => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



