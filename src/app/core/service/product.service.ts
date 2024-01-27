import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../modules/product';
import { productData } from 'src/app/core/constant/productData'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product$: BehaviorSubject<Product[]>;
  product: Array<Product> = [];

  constructor() { 
    this.product$ = new BehaviorSubject<Product[]>([]);
    this.product = productData;
  }
  getAll() {
    this.product$.next(this.product);
  }

  add(product: Product) {
    this.product.push(product);
  }

  edit(product: Product) {
    let findElem = this.product.find(p => p.id == product.id);
    findElem!.ProductName = product.ProductName;
    findElem!.Quantity = product.Quantity;
    findElem!.ProductBrand = product.ProductBrand;
    findElem!.ProductDepartment = product.ProductDepartment;
    findElem!.Price = product.Price;
    this.product$.next(this.product);
  }

  remove(id: number) {
   
    this.product = this.product.filter(p => {
      return p.id != id
    });

    this.product$.next(this.product);
  }
}
