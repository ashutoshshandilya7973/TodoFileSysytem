import express from 'express';
import cors from 'cors'
import {router as userRoute} from './routes/user.js'
const app=express();
app.use(express.json())
app.use(cors())
const port =3000;

app.use('/user',userRoute)

app.listen(3000,()=>{
    console.log(`The server is connected and your app is running on the port ${port}`)
})