import express from 'express';
import route from './routes/staffRoute';
import { setupSwagger } from './swagger/swagger';
import {sequelize} from './config/databsae';
const app=express()

app.use(express.json())
app.use('/api',route)
const PORT = 3000 || process.env.PORT

setupSwagger(app);

app.listen(PORT,async ()=>{
    try {
        await sequelize.authenticate();
        // await sequelize.sync()
       console.log('Connection to the database has been established successfully.');
   } catch (error) {
       console.error('Unable to connect to the database:', error);
   }
    console.log(`http://localhost:${PORT}`)
})