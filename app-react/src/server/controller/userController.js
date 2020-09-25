const User = require('../model/userSchema');

module.exports = {
    list: async (req, res) => {
        await User.find((err, objects) => {
            (err ? res.status(400).send("Erro ao recuperar os objetos!") : res.status(200).json(objects));
        });
    },

    include: async (req, res) => {
        let object = new User(req.body);
        await object.save((err, object) => {
            (err ? res.status(400).send("Erro ao incluir o objeto!") : res.status(200).json(object));
        });
    },
};