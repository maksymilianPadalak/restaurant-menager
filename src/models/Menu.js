import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "MENU";

databaseProvider.defineModel(
    MODEL_NAME,
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            unique: true,
        },
        restaurant_name: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

export const createMenu = async (menuProperties, dishesCount) => {
    if(isNumberOfDishesCorrect(dishesCount)) {
        await databaseProvider.create(MODEL_NAME, menuProperties);
    } else {
        throw new Error(`Minimal dish count 12`);
    }
}
const isNumberOfDishesCorrect = (dishes) => {
  return dishes.length >= 12;
};
