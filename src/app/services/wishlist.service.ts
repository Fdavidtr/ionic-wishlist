import { Injectable } from '@angular/core';
import {Wishlist} from '../models/wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlists: Wishlist[] = []

  constructor() {
    const list1 = new Wishlist('Recolectar gemas del infinito');
    const list2 = new Wishlist('Eliminar');

    this.wishlists.push(list1, list2);
  }

  getWishlists(): Wishlist[] {
    return this.wishlists;
  }

  createWishlist( title: string ) {
    const wl = new Wishlist(title);
    this.wishlists.push( wl );
  }

}
