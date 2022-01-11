'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DISH_ORDER', {
      DISH_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'DISH', key: 'ID' }
      },
      ORDER_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'ORDER', key: 'ID' }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DISH_ORDER');
  }
};
