const TodoItem = require('../models/TodoItem');
const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {

    console.log(Object.keys(req.body)[0]);
    const testTodo = new TodoItem({
        task: Object.keys(req.body)[0]
    });

    testTodo.save()
        .then(response => {
            res.send(response);
        })
        .catch(error => {
            res.send(error);
        })
});

router.post('/remove/', (req, res) => {
    console.log(Object.keys(req.body)[0]);
    TodoItem
        .findOneAndDelete({_id: Object.keys(req.body)[0]})
        .then(_ => console.log("success"))
});

router.get('/all', (req, res) => {
    TodoItem.find()
        .then(results => {
        res.send(results)
    })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;