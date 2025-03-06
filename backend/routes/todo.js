import express from 'express';
import { createtodo,editTodo,deleteTodo,getTodo, completeTodo } from '../controller/todoController.js';

const router =express.Router();

router.post('/create',createtodo)
router.post('/update',editTodo)
router.post('/delete',deleteTodo)
router.post('/complete',completeTodo)
router.get('/gettodo',getTodo)


export {router}