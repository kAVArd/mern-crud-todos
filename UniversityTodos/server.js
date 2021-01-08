const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 5000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:6666/UniversityTodos', { useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection esteblished successfully');
});

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});


todoRoutes.route('/').get((req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.status(400).send('Getting todos list failed');
        }
        else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(todo);
        }
    });
});

todoRoutes.route('/add').post((req, res) => {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).send('Todo successfuly saved!');
        })
        .catch(err => {
            res.status(400).send('Adding new todo failed');
        })
});

todoRoutes.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo) {
            res.status(400).send('data is not found');
        }
        else {
            todo.todoDescription = req.body.todoDescription;
            todo.todoResponsible = req.body.todoResponsible;
            todo.todoPriority = req.body.todoPriority;
            todo.todoCompleted = req.body.todoCompleted;

            todo.save().then(todo => {
                res.json(todo);
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            })
        }
    });
});

todoRoutes.route('/delete/:id').delete((req, res) => {
    Todo.deleteOne({_id: req.params.id}, (err, todo) => {
        if (err) {
            res.status(400).send('Deleting error');
        }
        else {
            res.status(200).json(todo);
        }
    })
});
