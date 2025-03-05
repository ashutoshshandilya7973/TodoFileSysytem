import express from 'express';
import cors from 'cors'
import {router as userRoute} from './routes/user.js'
import {router as todoRoute} from './routes/todo.js';
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

app.use(cors())
const port =3000;

app.use('/user',userRoute)
app.use('/todo',todoRoute)
app.listen(3000,()=>{
    console.log(`The server is connected and your app is running on the port ${port}`)
})