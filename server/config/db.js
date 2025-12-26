const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_db", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected sucessfully");
  } catch (err) {
    console.error("unable to connect to the database", err);
  }
};

connectDB();

module.exports = sequelize;
