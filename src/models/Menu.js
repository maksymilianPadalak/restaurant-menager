// src/models/example.js

import { Sequelize } from "sequelize";
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

export const createExample = async (options) =>
  databaseProvider.create(MODEL_NAME, options);
