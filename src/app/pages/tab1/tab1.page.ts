import { Component } from '@angular/core';
import {WishlistService} from '../../services/wishlist.service';
import {Wishlist} from '../../models/wishlist.model';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wishlists: Wishlist[];

  constructor(private wishlistService: WishlistService,
              private router: Router,
              private alertCtrl: AlertController) {
    this.wishlists = wishlistService.getWishlists();
  }

  async addWList() {
    //this.router.navigateByUrl('/tabs/tab1/add-wishlist');
    const alert = await this.alertCtrl.create({
      header:'Nueva lista',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Wishlist name'
        }
      ],
      buttons: [{
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log(data);
            if (data.title.length < 1) {
              return;
            }
            this.wishlistService.createWishlist(data.title)
          }
        }
      ]
    });
    await alert.present();
  }

}
