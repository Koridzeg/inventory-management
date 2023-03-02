import express from "express";
import {
  createInventory,
  deleteInventory,
  getAllInventories,
} from "../controllers/inventoryController";

const router = express.Router();

router.get("/inventories", getAllInventories);

router.post("/inventories", createInventory);

router.delete("/inventories/:id", deleteInventory);

export default router;
