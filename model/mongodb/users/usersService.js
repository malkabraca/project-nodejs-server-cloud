const User = require("./Users");

const registerUser = (userData) => {
  const user = new User(userData);
  return user.save();
};

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

const getAllUsers = () => {
  return User.find();
};

const getUserdById = (id) => {
  return User.findById(id);
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};


const updateUser = (id, userToUpdate) => {
  return User.findByIdAndUpdate(id, userToUpdate, {
    new: true,
  });
  };

module.exports = {
  registerUser,
  getUserByEmail,
  getAllUsers,
  getUserdById,
  deleteUser,
  updateUser,
};
