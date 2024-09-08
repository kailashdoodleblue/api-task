import { Sequelize } from "sequelize";
import dotenv  from "dotenv";

dotenv.config();

export const sequelize= new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'staffdb',
})

