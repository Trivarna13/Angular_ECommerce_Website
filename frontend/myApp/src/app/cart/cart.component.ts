import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav3Component } from '../nav3/nav3.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, Nav3Component],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartData().subscribe((data) => {
      this.cartData = data;
      this.totalAmount = this.cartData.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    });
  }
}
