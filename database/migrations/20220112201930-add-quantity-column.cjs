'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'DISH_ORDER',
            'QUANTITY',
            Sequelize.INTEGER,
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('DISH_ORDER', 'QUANTITY');
    },
};
