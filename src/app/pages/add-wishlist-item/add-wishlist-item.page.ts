import { Component, OnInit } from '@angular/core';
import {WishlistService} from '../../services/wishlist.service';
import {ActivatedRoute} from '@angular/router';
import {Wishlist} from '../../models/wishlist.model';
import {WishlistItem} from '../../models/wishlist-item.model';

@Component({
  selector: 'app-add-wishlist-item',
  templateUrl: './add-wishlist-item.page.html',
  styleUrls: ['./add-wishlist-item.page.scss'],
})
export class AddWishlistItemPage implements OnInit {

  wishlist: Wishlist;
  itemName: string;

  constructor(private wishlistService: WishlistService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.wishlist = this.wishlistService.getWishlist(Number(params.wl_id));
    });
  }

  addItem() {
    if ( !this.itemName ) { return; }

    const item = new WishlistItem({desc: this.itemName});
    console.log(this.wishlist);
    this.wishlist.addItem(item);

    this.itemName = '';
    this.wishlistService.saveStorage();
  }

  toggleCompleted(item: WishlistItem) {
    const hasPendings = this.wishlist.items.find(e => e.completed === false);
    if (!hasPendings) {
      this.wishlist.completed = true;
      this.wishlist.completedAt = new Date();
    } else {
      this.wishlist.completed = false;
      this.wishlist.completedAt = null;
    }
    this.wishlistService.saveStorage();
  }

  deleteItem(item: WishlistItem) {
    this.wishlist.items = this.wishlist.items.filter(e => e !== item );
    this.wishlistService.saveStorage();
  }
}
