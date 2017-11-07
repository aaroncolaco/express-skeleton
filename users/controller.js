'use strict';

const getAllUsers = (req, res) => {
  return res.json({ "message": "Return all users" });
};


const errorResponse = (res, message, error, status = 500) =>
  res.status(status).json({ "status": status, "message": message, "error": error });


module.exports = {
  getAllUsers
};
