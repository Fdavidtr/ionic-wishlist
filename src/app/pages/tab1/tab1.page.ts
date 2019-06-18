import { Component } from '@angular/core';
import {WishlistService} from '../../services/wishlist.service';
import {Wishlist} from '../../models/wishlist.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wishlists: Wishlist[];

  constructor(private wishlistService: WishlistService,
              private router: Router) {
    this.wishlists = wishlistService.getWishlists();
  }

  addWList() {
    this.router.navigateByUrl('/tabs/tab1/add-wishlist');
  }

}
