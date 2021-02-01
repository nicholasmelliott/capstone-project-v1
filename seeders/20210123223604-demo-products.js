'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
        type:'storm window',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        type:'glass',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        type:'strom screen',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        type:'screen',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        type:'window',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        type:'glass',
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};

