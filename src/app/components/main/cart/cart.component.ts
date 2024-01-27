import { Component } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService
  ) { }
}
