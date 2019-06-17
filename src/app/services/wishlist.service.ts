import { Injectable } from '@angular/core';
import {Wishlist} from '../models/wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlists: Wishlist[] = []

  constructor() {
    console.log('wishlist service constructor');
  }
}
