import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || "";

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

export const config = {
  database: {
    url: DATABASE_URL,
  },
  server: {
    port: SERVER_PORT,
  },
};
