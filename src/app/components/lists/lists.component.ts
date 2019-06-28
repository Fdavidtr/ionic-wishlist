import {Component, Input, OnInit} from '@angular/core';
import {Wishlist} from '../../models/wishlist.model';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() fromDone = true;
  @Input() wishlists: Wishlist[];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {}

  handleWishlistClick(wishlist: Wishlist) {
    this.wishlistService.navigateToWishlist(wishlist, this.fromDone);
  }

  deleteItem(wishlist: Wishlist) {
    this.wishlistService.deleteWishlist(wishlist);
  }

}
