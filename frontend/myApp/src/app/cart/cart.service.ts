import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import cartData from './cart.json';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getCartData(): Observable<any[]> {
    return of(cartData);
  }
}
