import {WishlistItem} from './wishlist-item.model';

export class Wishlist {

    id: number;
    title: string;
    createdAt: Date;
    completedAt: Date;
    completed: boolean;
    items: WishlistItem[];

    constructor(title: string ) {
        this.title = title;
        this.id = new Date().getTime();
        this.createdAt = new Date();
        this.completed = false;
        this.items = [];
    }
}
