const express = require('express');
import { todo } from './db';
const  { createTodoCheck, updateTodoCheck } = require('./types ');

const app = express;


app.get('/todos', (req, res) => {
    
    res.json({
        todos:[]
    })
})


app.post('/todo', async (req, res) => {
    const createPayLoad = req.body;
    
    const checkPayload = createTodoCheck.safeParse(createTodoCheck);

    if (!checkPayload.success) {
        res.status(400).json({
            message: 'Invalid todo'
        })

        return;
    }

    const title = createPayLoad.title;
    const description = createPayLoad.description;

    const completed = false;

    await todo.create({
        title,
        description,
        completed
    })

    res.json({
        msg: "todo created"
    })
})


app.put('/completed', async (req, res) => {
    const updatePayLOad = req.body;
    const checkUpdatePayload = updateTodoCheck.safeParse(updatePayLOad);

    if (!checkUpdatePayload.success) {
        res.status(400).json({
            message: 'Invalid todo'
        })

        return;
    }

    await todo.update({
        _id: updatePayLOad.id
    }, {
        completed:true
    })

    res.json({
        msg: "todo updated"
    })
})

app.listen(3000);