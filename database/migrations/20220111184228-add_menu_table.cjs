'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MENU', { ID: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, RESTAURANT_NAME: Sequelize.STRING, NAME: Sequelize.STRING});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MENU');
  }
};
