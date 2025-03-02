import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, '../data/todo.json');

const getTodo=(req,res)=>{
    const {user}=req.body;
    const data =fs.readFileSync(filePath,'utf-8');
    const newData=data?JSON.parse(data):[];
    const userTodo=newData.filter((data)=>data.user===user);
    res.status(200).send({message:"Here is the list of all your specific todo",todo:userTodo})
}

const createtodo = (req, res) => {
    const { title, user, body } = req.body;


    const data = fs.readFileSync(filePath, 'utf8');
    const newData = data ? JSON.parse(data) : [];
    console.log(newData)
    const id = newData.length + 1;
    const upload = {
        id: id,
        user: user,
        title: title,
        body: body,
        isCompleted: false,
        date: Date.now()
    }
    newData.push(upload)
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), 'utf-8');

    res.status(200).send({ message: "todo created successfully" })

}

const editTodo = (req, res) => {
    const { id, title, body } = req.body;

    const data = fs.readFileSync(filePath, 'utf-8');
    const newData = data ? JSON.parse(data) : [];

    const updatedTodo = newData.map((data) => {

        if (data.id === id) {
            data.title = title;
            console.log(data.title)
            data.body = body;
        }
        return data;
    })

    fs.writeFileSync(filePath, JSON.stringify(updatedTodo, null, 2), 'utf-8');
    res.status(200).send({ message: "your todo has been updated" })

}

const deleteTodo = (req, res) => {
    const { id } = req.body;
    const data = fs.readFileSync(filePath, 'utf-8');
    const newData = data ? JSON.parse(data) : [];
    const upload = newData.filter((data) => data.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(upload, null, 2), 'utf8');

    res.status(200).send({ message: "The given todo has been deleted from the database" })
}

export { createtodo, editTodo, deleteTodo,getTodo }