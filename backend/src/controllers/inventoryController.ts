import { Request, Response } from "express";
import Inventory from "../models/inventory";

export const getAllInventories = async (req: Request, res: Response) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json({ inventories });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};
