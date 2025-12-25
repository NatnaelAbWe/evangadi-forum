const { sequelize } = require("sequelize");

const sequelize = new sequelize("my_db", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
