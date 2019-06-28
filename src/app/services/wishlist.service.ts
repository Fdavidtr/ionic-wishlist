import { Injectable } from '@angular/core';
import {Wishlist} from '../models/wishlist.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlists: Wishlist[];

  constructor(private router: Router) {
    this.wishlists = this.getStorage();
  }

  getWishlists(): Wishlist[] {
    return this.wishlists;
  }

  getWishlist(id: number): Wishlist {
    return this.wishlists.find(e => e.id === id);
  }

  createWishlist( title: string ): Wishlist {
    const wl = new Wishlist({title});
    this.wishlists.push( wl );
    this.saveStorage();
    return wl;
  }

  navigateToWishlist(wishlist: Wishlist) {
    this.router.navigateByUrl(`/tabs/tab1/add-wishlist-item/${wishlist.id}`);
  }

  saveStorage() {
    localStorage.setItem('wishlists', JSON.stringify(this.wishlists));
  }

  getStorage(): Wishlist[] {
    const wishlists = localStorage.getItem('wishlists');
    if (wishlists) {
      const wishlistData = JSON.parse(wishlists);
      return wishlistData.map(e => new Wishlist(e));
    }
    return [];
  }
}
