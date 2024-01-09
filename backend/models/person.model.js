const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Username: { type: DataTypes.STRING(30), allowNull: false },
    Password: { type: DataTypes.STRING(30), allowNull: false },
  };
  /* by default it pluralize the model, so it will tread it as 'People' and query will be like
     select * from People  (if you have pre existing table Person, then it won't get records)
  */
  const options = {
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  };
  return sequelize.define("Person", attributes, options);
}