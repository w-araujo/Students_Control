const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');

const routes = express.Router();

// Controllers
const StudentsController = require('./controllers/StudentsController');


routes.get('/students', StudentsController.index);

routes.post('/students', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        lastname: Joi.string().required(),
        age: Joi.string().min(1).max(3).required(),
        email: Joi.string().email().required(),
        address: Joi.string().required()
    })
}), StudentsController.create);

routes.put('/students/:id', StudentsController.update);

routes.delete('/students/:id', StudentsController.delete);

module.exports = routes;