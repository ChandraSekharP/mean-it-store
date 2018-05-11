
class Asset {
  _id:string;
  assetId: string;
  category: string;
  make: string;
  primary: string;
  date: Date;

  constructor() {
      this.assetId = ""
      this.category = ""
      this.make = ""
      this.primary = ""
      this.date = new Date()
    }
}

export default Asset;
