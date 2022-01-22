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
            autoIncrement: true
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            unique: true,
        },
        restaurantName: {
            type: Sequelize.DataTypes.STRING,
            field: 'restaurant_name'
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

export const updateMenu = async (condition, fieldsToUpdate ) => databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);


export const getById = async (id) => {
  return await databaseProvider.getOne(MODEL_NAME,{where: {id}})
}

const isNumberOfDishesCorrect = (dishesCount) => {
  //todo add handling response when dishes count less than 12
  return dishesCount >= 12;
};
