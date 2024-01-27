export class Product {
    id?: number;
    ProductName: string;
    Quantity: number;
    ProductBrand: string;
    ProductDepartment: string;
    Price: number;
  
    constructor(id: number = 0, 
                ProductName: string = '', Quantity: number = 0, ProductBrand: string = '',
                 ProductDepartment: string = '', Price: number = 0) {
      this.id = id;
      this.ProductName = ProductName;
      this.Quantity = Quantity;
      this.ProductBrand = ProductBrand;
      this.ProductDepartment = ProductDepartment;
      this.Price = Price;
    }
}
