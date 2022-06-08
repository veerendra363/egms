'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
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
    });

    await queryInterface.createTable('goals', {
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
          model: 'employees',
          key: 'id'
        }, 
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};