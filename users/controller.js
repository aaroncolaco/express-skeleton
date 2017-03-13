'use strict';

const getAllUsers = (req, res) => {
  return res.json({"message": "Return all users"});
};


module.exports = {
  getAllUsers
};
