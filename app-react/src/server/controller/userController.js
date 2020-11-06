const User = require('../model/UserSchema');

module.exports = {

  getAll: async (req, res) => {
    await User.find((err, objects) => {
      (err ? res.status(400).send(`${err}`) : res.status(200).json(objects));
    }).sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  get: async (req, res) => {
    const object = await User.findOne({ _id: req.params.id }, function (err) {
      if (err)
        res.status(400).send(`${err}`);
    });
    res.status(200).json(object);
  },

  insert: async (req, res) => {
    let object = new User(req.body);
    await object.save((err, object) => {
      (err ? res.status(400).send(`${err}`) : res.status(200).json(object));
    });
  },

  update: async (req, res) => {
    let object = new User(req.body);
    await User.updateOne({ _id: object._id }, object, function (err) {
      (err ? res.status(400).send(`${err}`) : res.status(200).json(object));
    });
  },

  delete: async (req, res) => {
    await User.deleteOne({ _id: req.params.id }, function (err) {
      (err ? res.status(400).send(`${err}`) : res.status(200).json("status: ok"));
    });
  },

  filtrate: async (req, res) => {
    const objects = await User.find({
      $or: [
        { name: { $regex: req.params.filtro, $options: "i" } },
        { email: { $regex: req.params.filtro, $options: "i" } },
      ],
    }, function (err) {
      if (err)
        res.status(400).send(`${err}`);
    }).sort({ name: -1 }); // -1 decrescente 1 crescente
    res.json(objects);
  },
};
