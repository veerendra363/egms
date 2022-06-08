'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Goal.belongsTo(models.Employee, { foreignKey: "employee_id" });
      models.Employee.hasMany(Goal, { foreignKey: "employee_id" })
    }
  }
  Goal.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title : {
        type: Sequelize.STRING,
        allowNull: false
      },
      status:{
        type: Sequelize.ENUM('Not Started', 'Inprogress', 'Completed', 'Failed'),
        allowNull: false,
        defaultValue: 'Not Started'
      },
      description : {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      employee_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'employee',
          key: 'id'
        }, 
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
  }, {
    sequelize,
    modelName: 'Goal',
    tableName: 'goals',
    timestamps: false,
  });
  return Goal;
};