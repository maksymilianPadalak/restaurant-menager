import {Sequelize} from "sequelize";
import databaseProvider from "../DatabaseProvider.js";

const MODEL_NAME = "ORDER";

const Order = databaseProvider.defineModel(
  MODEL_NAME,
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tableNumber: {
      type: Sequelize.DataTypes.INTEGER,
      field: "table_number"
    },
    takeAway: {
      type: Sequelize.DataTypes.BOOLEAN,
      field: "take_away"
    },
    price: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    placedAt: {
      type: Sequelize.DataTypes.DATE,
      field: "placed_at"
    },
    completedAt: {
      type: Sequelize.DataTypes.DATE,
      field: "completed_at"
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export const updateOrders = async (orders) => {
  await databaseProvider.updateAll(MODEL_NAME, orders)
}

export const updateOrder = async (condition, fieldsToUpdate ) => databaseProvider.update(MODEL_NAME, condition, fieldsToUpdate);

export const createOrder = async (order) => {
  return await databaseProvider.create(MODEL_NAME, order, false);
}

export const getOrdersByIds = async (ordersIds) => {
  return await databaseProvider.getByIds(MODEL_NAME, ordersIds)
}
