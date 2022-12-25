const data = require('../data.json');

const users = [...data];

const getUsers = (req, res) => {
  res.status(200).json({
    users,
  });
};

const getUser = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    user: users.find((user) => user.id === +id),
  });
};

const createUser = (req, res) => {
  res.status(200).json({});
};

const updateUser = (req, res) => {
  res.status(200).json({});
};

const deleteUser = (req, res) => {
  res.status(200).json({});
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
