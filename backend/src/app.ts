import express from "express";
import { config } from "./config/config";
import { sequelize } from "./database/database";
import Logging from "./library/Logging";
import inventoryRoute from "./routes/routes";

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    Logging.info("Database connection successful");
    app.listen(config.server.port, () => {
      Logging.info(`⭐ Server is listening on ${config.server.port}`);
    });
  } catch (error) {
    Logging.error({ message: "Database connection error:", error: error });
  }
};

app.use(express.json());

app.use("/api", inventoryRoute);

start();
