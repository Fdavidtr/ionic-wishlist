import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Wishlist} from '../../models/wishlist.model';
import {WishlistService} from '../../services/wishlist.service';
import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() fromDone = true;
  @Input() wishlists: Wishlist[];
  @ViewChild( IonList ) ionList: IonList;

  constructor(private wishlistService: WishlistService, private alertCtrl: AlertController) { }

  ngOnInit() {}

  handleWishlistClick(wishlist: Wishlist) {
    this.wishlistService.navigateToWishlist(wishlist, this.fromDone);
  }

  deleteItem(wishlist: Wishlist) {
    this.wishlistService.deleteWishlist(wishlist);
  }

  async handleRenameItemClick(wishlist: Wishlist) {
    const alert = await this.alertCtrl.create({
      header: 'Rename List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Wishlist name',
          value: wishlist.title
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
        {
          text: 'Rename',
          handler: async (data) => {
            console.log(data);
            if (data.title.length < 1) {
              return;
            }
            console.log(this.ionList);
            await this.ionList.closeSlidingItems();
            this.wishlistService.renameItem(wishlist, {title: data.title});
          }
        }
      ]
    });
    await alert.present();
  }


}
