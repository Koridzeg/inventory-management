import { Model, Optional } from "sequelize";

export enum PlaceLocation {
  MainOffice = "მთავარი ოფისი",
  CaveaGallery = "კავეა გალერია",
  CaveaTbilisiMall = "კავეა თბილისი მოლი",
  CaveaEastPoint = "კავეა ისთ ფოინთი",
  CaveaCityMall = "კავეა სითი მოლი",
}

interface InventoryAttributes {
  name: string;
  price: number;
  location: PlaceLocation;
}

class Inventory
  extends Model<InventoryAttributes>
  implements InventoryAttributes
{
  public id!: number;
  public name!: string;
  public price!: number;
  public location!: PlaceLocation;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
