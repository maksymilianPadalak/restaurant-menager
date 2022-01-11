'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ORDER', {
      ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      TABLE_NUMBER: Sequelize.INTEGER,
      TAKE_AWAY: Sequelize.BOOLEAN,
      PRICE: Sequelize.FLOAT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ORDER');
  }
};
