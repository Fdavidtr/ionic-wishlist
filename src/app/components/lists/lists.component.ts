import {Component, Input, OnInit} from '@angular/core';
import {Wishlist} from '../../models/wishlist.model';
import {WishlistService} from '../../services/wishlist.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() wishlists: Wishlist[];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {}

  handleWishlistClick(wishlist) {
    console.log(wishlist);
    this.wishlistService.navigateToWishlist(wishlist);
  }

}
