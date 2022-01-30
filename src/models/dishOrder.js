import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "DISH_ORDER";

let DISH_ORDER = databaseProvider.defineModel(
  MODEL_NAME,
  {
    dishId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      field: 'dish_id'
    },
    orderId: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      field: 'order_id'
    },
    quantity: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export const createDishOrder = async (dishOrder) => {
  await databaseProvider.create(MODEL_NAME, dishOrder)
}
