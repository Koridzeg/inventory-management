import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { PlaceLocation } from "../types/types";

const Inventory = sequelize.define(
  "Inventory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    location: {
      type: DataTypes.ENUM({
        values: Object.values(PlaceLocation),
      }),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "inventory",
  }
);

export default Inventory;
