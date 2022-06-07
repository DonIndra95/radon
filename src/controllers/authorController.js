const AuthorModel = require("../models/authorModel");

const createAuthor = async function (req, res) {
  let author = req.body;
  let savedAuthor = await AuthorModel.create(author);
  res.send({ msg: savedAuthor});
};

module.exports.createAuthor=createAuthor;