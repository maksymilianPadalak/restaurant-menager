'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'ORDER',
        'PLACED_AT',
        Sequelize.DATE,
      );
},

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('ORDER', 'PLACED_AT');
  }
};
