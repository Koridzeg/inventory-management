import { Request, Response } from "express";
import Logging from "../library/Logging";
import Inventory from "../models/inventory";

export const getAllInventories = async (req: Request, res: Response) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json({ inventories });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const createInventory = async (req: Request, res: Response) => {
  try {const { name, price, location } = req.body;

  if (!name || !price || !location) {
    return res.status(400).json({ message: "Missing request data" });
  }

  const newItem = await Inventory.create({
    name,
    price,
    location,
  });

  return res.status(201).json(newItem)

} catch (error){
  return res.status(500).json({message:"Server Error", error:error
})
}
};
