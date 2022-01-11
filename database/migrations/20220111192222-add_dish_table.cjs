'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DISH', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NAME: Sequelize.STRING,
      PRICE: Sequelize.FLOAT,
      CATEGORY: Sequelize.STRING,
      MENU_ID: {
        type: Sequelize.INTEGER,
        references: { model: 'MENU', key: 'ID' }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DISH');
  }
};
