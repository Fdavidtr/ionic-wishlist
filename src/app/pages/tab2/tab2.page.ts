import { Component } from '@angular/core';
import {Wishlist} from '../../models/wishlist.model';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  wishlists: Wishlist[];

  constructor(wishlistService: WishlistService) {
     wishlistService.getWishlists().subscribe(e => this.wishlists = e);
  }

  getDoneWishlists(): Wishlist[] {
    return this.wishlists.filter(e => e.completed === true );
  }

}
