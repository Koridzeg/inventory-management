import { faker } from "@faker-js/faker";
import Logging from "../library/Logging";
import Inventory from "../models/inventory";

const generateInventoryData = () => {
  const inventories = [];

  for (let i = 0; i < 200000; i++) {
    const inventory = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      location: faker.helpers.arrayElement([
        "მთავარი ოფისი",
        "კავეა გალერია",
        "კავეა თბილისი მოლი",
        "კავეა ისთ ფოინთი",
        "კავეა სითი მოლი",
      ]),
    };
    inventories.push(inventory);
  }
  return inventories;
};

export const seedInventories = async () => {
  try {
    const inventories = generateInventoryData();
    await Inventory.bulkCreate(inventories);
    Logging.info("Inventories seeded successfully");
  } catch (error) {
    Logging.error({ message: "Error while seeding inventories", error: error });
  }
};

seedInventories()