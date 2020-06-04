const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const students = await connection('students').select('*');

        const [count] = await connection('students')
            .count();

        res.header('X-Total-Count', count['count(*)']);
        return res.json(students);
    },

    async create(req, res) {
        const { name, lastname, age, email, address } = req.body;

        const email_exists = await connection('students')
            .where('email', email)
            .select('id')

        if (email_exists.length > 0) {
            return res.json({ error: 'Email já existe, tente novamente.' });
        }

        const [id] = await connection('students').insert({
            name,
            lastname,
            age,
            email,
            address
        });

        return res.json({ id });

    },

    async update(req, res) {
        const { id } = req.params;

        const students = await connection('students')
            .where('id', id)
            .select('name')

        if (students == false) {
            return res.status(404).json({ error: 'Estudante não encontrado.' });
        }

        const { name, lastname, age, email, address } = req.body;

        await connection('students')
            .where('id', '=', id)
            .update({ name: name, lastname: lastname, age: age, email: email, address: address })

        return res.json({ name, lastname, age, email, address });

    },

    async delete(req, res) {
        const { id } = req.params;

        const students_exists =  await connection('students')
        .where('id', id)
        .select('name');

        if(students_exists.length > 0){
            await connection('students').where('id', id).delete();

            return res.status(204).send();
        }

        return res.status(404).json({ error: 'Aluno não existente.'});
    },

};