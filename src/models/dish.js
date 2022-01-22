import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "DISH";

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
    },
    category: {
      type: Sequelize.DataTypes.STRING,
    },
    price: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    menu_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export const createDish = async (options) => {
  await databaseProvider.create(MODEL_NAME, options)
}

export const getDishesByIds = async (dishesIds) => {
  return await databaseProvider.getByIds(MODEL_NAME, dishesIds)
}

export const getByMenuId = async (menuId) => {
  return await databaseProvider.getAllWithOptions(MODEL_NAME,{where: {menu_id: menuId}});
}
