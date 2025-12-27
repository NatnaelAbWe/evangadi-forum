const { Sequelize } = require("sequelize");
const { DataTypes } = require("sequelize");

const User = Sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: DataTypes.STRING,
  allowNull: true,
});
module.exports = User;
