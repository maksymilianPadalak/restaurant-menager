import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "DISH";

const Dish = databaseProvider.defineModel(
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
    menuId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      field: 'menu_id'
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export const updateDishes = async (dishes) => {
  await databaseProvider.updateAll(MODEL_NAME, dishes)
}

export const updateDish = async (dish) => {
  await databaseProvider.update(MODEL_NAME, dish)
}

export const createDish = async (dish) => {
  await databaseProvider.create(MODEL_NAME, dish)
}

export const getDishesByIds = async (dishesIds) => {
  return await databaseProvider.getByIds(MODEL_NAME, dishesIds)
}

export const getByMenuId = async (menuId) => {
  return await databaseProvider.getAllWithOptions(MODEL_NAME,{where: {menu_id: menuId}});
}
