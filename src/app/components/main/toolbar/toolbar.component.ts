import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Product } from 'src/app/core/modules/product';
import { CartService } from 'src/app/core/service/cart.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

@Output() buttonClicked = new EventEmitter<void>();
menuButtonClicked(){
  this.buttonClicked.emit();
}
constructor(
  private authService: AuthService,
  private router: Router, private cartService: CartService
  ){
}
Product: any;
logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
addToCart(product: Product) {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}

}
