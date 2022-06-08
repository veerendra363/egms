'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fname : {
      type: Sequelize.STRING,
      allowNull: false
    },
    lname : {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique : true
    },
    phone_number:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    skills:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    role:{
      type: Sequelize.ENUM('Employee','Admin','Super Admin'),
      allowNull: false
    },
    gdo:{
      type: Sequelize.ENUM('GDO1', 'GDO2', 'GDO3', 'GDO4', 'ALL'),
      allowNull: false
    },
    user_name:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    tableName: 'employees',
    modelName: 'Employee',
    timestamps: false
  });
  return Employee;
};