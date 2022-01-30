'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'ORDER',
        'COMPLETED_AT',
        Sequelize.DATE,
      );
},

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('ORDER', 'COMPLETED_AT');
  }
};
