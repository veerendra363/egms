'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'employees',
      [
        {
          id: 1,
          fname: 'Veerendra',
          lname: 'Paradesi',
          email: 'veeru@gmail.com',
          phone_number: '9581186660',
          role:'Super Admin',
          skills: 'React, nodejs, communication',
          gdo: 'ALL',
          user_name: 'Veeru123',
          password: 'Veeru@123',
        },
        {
          id: 2,
          fname: 'Neela',
          lname: 'Paradesi',
          email: 'neela@gmail.com',
          phone_number: '7458692345',
          role: 'Admin',
          skills: 'React, nodejs, Express',
          gdo: 'GDO1',
          user_name: 'Neela123',
          password: 'Neela@123',
        },
        {
          id: 3,
          fname: 'Leela',
          lname: 'Prasad',
          email: 'leela@gmail.com',
          phone_number: '6748590324',
          role: 'Admin',
          skills: 'Java, CPP, Python',
          gdo: 'GDO2',
          user_name: 'Leela123',
          password: 'Leela@123',
        },
        {
          id: 4,
          fname: 'Rama',
          lname: 'Kumar',
          email: 'rama@gmail.com',
          phone_number: '6784930234',
          role: 'Admin',
          skills: 'C, JavaScript, Management',
          gdo: 'GDO3',
          user_name: 'Rama123',
          password: 'Rama@123',
        },
        {
          id: 5,
          fname: 'Krishna',
          lname: 'Reddy',
          email: 'krishna@gmail.com',
          phone_number: '6789045345',
          role: 'Admin',
          skills: 'AI, ML, Database, Nodejs',
          gdo: 'GDO4',
          user_name: 'Krishna123',
          password: 'Krishna@123',
        },
        {
          id: 6,
          fname: 'Shiva',
          lname: 'Pandit',
          email: 'shiva@gmail.com',
          phone_number: '7896054123',
          role: 'Employee',
          skills: 'Javascript, HTML, CSS',
          gdo: 'GDO1',
          user_name: 'Shiva123',
          password: 'Shiva@123',
        },
        {
          id: 7,
          fname: 'Brahma',
          lname: 'Pandit',
          email: 'brahma@gmail.com',
          phone_number: '6758930231',
          role: 'Employee',
          skills: 'Python, CPP',
          gdo: 'GDO1',
          user_name: 'Brahma123',
          password: 'Brahma@123',
        },{
          id: 8,
          fname: 'Vishnu',
          lname: 'Banerjee',
          email: 'vishnu@gmail.com',
          phone_number: '5678903425',
          role: 'Employee',
          skills: 'Javascript, HTML, CSS, CPP',
          gdo: 'GDO1',
          user_name: 'Vishnu123',
          password: 'Vishnu@123',
        },{
          id: 9,
          fname: 'Parvati',
          lname: 'Naidu',
          email: 'paravati@gmail.com',
          phone_number: '6785940322',
          role: 'Employee',
          skills: 'Javascript, CSS, HTML, React',
          gdo: 'GDO1',
          user_name: 'Parvati123',
          password: 'Parvati@123',
        },
        {
          id: 10,
          fname: 'Sita',
          lname: 'Rama',
          email: 'sita@gmail.com',
          phone_number: '7890453245',
          role: 'Employee',
          skills: 'Nodejs, HTML, CSS',
          gdo: 'GDO1',
          user_name: 'Sita123',
          password: 'Sita@123',
        },{
          id: 11,
          fname: 'Kali',
          lname: 'Reddy',
          email: 'kali@gmail.com',
          phone_number: '6789434567',
          role: 'Employee',
          skills: 'React js, Node js',
          gdo: 'GDO2',
          user_name: 'Kali123',
          password: 'Kali@123',
        },
        {
          id: 12,
          fname: 'Saraswati',
          lname: 'Rao',
          email: 'saraswati@gmail.com',
          phone_number: '6784930233',
          role: 'Employee',
          skills: 'HTML, CSS',
          gdo: 'GDO3',
          user_name: 'Saraswati123',
          password: 'Saraswati@123',
        },
        {
          id: 13,
          fname: 'Radha',
          lname: 'Krishna',
          email: 'radha@gmail.com',
          phone_number: '6789302346',
          role: 'Employee',
          skills: 'React, Node',
          gdo: 'GDO4',
          user_name: 'Radha123',
          password: 'Radha@123',
        },
      ],
      {}
    );

   
    await queryInterface.bulkInsert(
      'goals',
      [
        {
          id: 1,
          title: 'Learn React',
          status: 'Completed',
          description: 'React is a javascript framework. so, before starting react just revise javascript',
          employee_id: 6,
          date: '2022-05-01'
        },
        {
          id: 2,
          title: 'Laern Nodejs',
          status: 'Completed',
          description: 'Node is runtime for javascript',
          employee_id: 6,
          date: '2022-05-01'
        },
        {
          id: 3,
          title: 'Employee goals management system assignment',
          status: 'Inprogress',
          description: 'Use react, nodejs, express to complete this assignment',
          employee_id: 6,
          date: new Date()
        },
        {
          id: 4,
          title: 'My Dairy assignment',
          status: 'Inprogress',
          description: '',
          employee_id: 6,
          date: new Date()
        },
        {
          id: 5,
          title: 'Learn migrations',
          status: 'Completed',
          description: 'use migrations to complete your assignments',
          employee_id: 6,
          date: new Date()
        },
        {
          id: 6,
          title: 'My Dairy assignment',
          status: 'Inprogress',
          description: '',
          employee_id: 7,
          date: new Date() 
        },
        {
          id: 7,
          title: 'Learn migrations',
          status: 'Completed',
          description: 'use migrations to complete your assignments',
          employee_id: 8,
          date: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('goals', null, {});
    await queryInterface.bulkDelete('employee', null, {});
  },
};
