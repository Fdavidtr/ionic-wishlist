import { Injectable } from '@angular/core';
import {Wishlist} from '../models/wishlist.model';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  //wishlists: Wishlist[];

  private wishlists = new BehaviorSubject<Wishlist[]>([]);

  constructor(private router: Router) {
    this.setWishlists(this.getStorage());
    console.log(this.wishlists);
  }

  getWishlists(): Observable<Wishlist[]> {
    return this.wishlists.asObservable();
  }

  getWishlist(id: number): Wishlist {
    return this.wishlists.getValue().find( i => i.id === id);
  }


  createWishlist( title: string ): Wishlist {
    //TODO
    const wl = new Wishlist({title});
    //this.wishlists.push( wl );
    this.saveStorage();
    return wl;
  }

  setWishlists(wishlists: Wishlist[]) {
    this.wishlists.next(wishlists);
  }

  deleteWishlist(wishlist: Wishlist) {
    const wishlists = this.wishlists.getValue().filter(e => e.id !== wishlist.id);
    this.setWishlists(wishlists);
    this.saveStorage();
    return this.wishlists;
  }

  navigateToWishlist(wishlist: Wishlist, fromDone: boolean) {
    const url = fromDone ? '/tabs/tab2/add-wishlist-item/' : '/tabs/tab1/add-wishlist-item/';
    this.router.navigateByUrl(`${url}${wishlist.id}`);
  }

  saveStorage() {
    localStorage.setItem('wishlists', JSON.stringify(this.wishlists.getValue()));
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
