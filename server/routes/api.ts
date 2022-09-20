import { Router } from "express";
import Task from "../models/tasks";

const api = Router();

api.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

api.get('/tasks/:id', (req, res) => {
    res.send("Obteniendo la tarea con el id!");
});

api.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({title, description});
    await task.save();
    res.send(task);
});

api.put('/tasks/:id', (req, res) => {
    res.send("Editando la tarea con el id!");
});

api.delete('/tasks:id', (req, res) => {
    res.send("Eliminando la tarea con el id!");
});

export default api;