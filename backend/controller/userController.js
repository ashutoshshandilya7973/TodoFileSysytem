import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const register = (req, res) => {
  const { name, email, password } = req.body;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, '../data/user.json');
  const data = fs.readFileSync(filePath, 'utf8');

  const newData = data ? JSON.parse(data) : [];
  const hashPassword = bcrypt.hashSync(password, 10);
  const upload = {
    name: name,
    email: email,
    password: hashPassword
  }
  newData.push(upload);
  const info = fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf8');
  res.status(200).send({ message: "your registration is successfully done" })

}

const login = (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, '../data/user.json');

  const data = fs.readFileSync(filePath, 'utf8');
  const newData = data ? JSON.parse(data) : [];
  const info = newData.find((data) => data.email === email);
  if (info) {

    const pass = bcrypt.compareSync(password, info.password)
    if(pass){
      const token =jwt.sign(email,process.env.TOKEN_SECRET_KEY)
      res.status(200).send({message:"you have login in successfully",token:token,user:info.name})

    }else{
      res.status(400).send({message:"invalid password please enter the right password"})
    }

  } else {
    res.status(400).send({ message: "Invalid email address please send the right email" })
  }

}
export { register, login }