import express from "express";
import { getAllInventories } from "../controllers/inventoryController";

const router = express.Router();

router.get("/inventories", getAllInventories);

router.post("/inventories");

router.delete("/inventories/:id");

export default router;
