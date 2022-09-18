import { Router } from "express";

const api = Router();

api.get('/tasks', (req, res) => {
    res.send("Obteniendo tareas!");
});

api.get('/tasks/:id', (req, res) => {
    res.send("Obteniendo la tarea con el id!");
});

api.post('/tasks', (req, res) => {
    res.send("Creando tareas!");
});

api.put('/tasks/:id', (req, res) => {
    res.send("Editando la tarea con el id!");
});

api.delete('/tasks:id', (req, res) => {
    res.send("Eliminando la tarea con el id!");
});

export default api;