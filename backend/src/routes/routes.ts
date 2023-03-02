import express from "express";
import { createInventory, getAllInventories } from "../controllers/inventoryController";

const router = express.Router();

router.get("/inventories", getAllInventories);

router.post("/inventories", createInventory);

router.delete("/inventories/:id");

export default router;
