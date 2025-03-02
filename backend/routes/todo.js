import express from 'express';
import { createtodo,editTodo,deleteTodo,getTodo } from '../controller/todoController.js';

const router =express.Router();

router.post('/create',createtodo)
router.post('/update',editTodo)
router.post('/delete',deleteTodo)
router.get('/',getTodo)


export {router}