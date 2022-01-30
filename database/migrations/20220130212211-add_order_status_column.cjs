'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'ORDER',
        'STATUS',
        Sequelize.STRING,
    );
},

down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('ORDER', 'STATUS');
},
};
