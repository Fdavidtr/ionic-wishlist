import {WishlistItem} from './wishlist-item.model';

export class Wishlist implements WishlistInterface {

    id: number;
    title: string;
    createdAt: Date;
    completedAt: Date;
    completed: boolean;
    items: WishlistItem[];

    constructor( { title, id, createdAt, completed = false, items = [], completedAt=null }: WishlistInterface ) {
        this.title = title;
        this.id = id || new Date().getTime();
        this.createdAt = createdAt || new Date();
        this.completed = completed;
        this.completedAt = completedAt;
        this.items = items.map(e => (e instanceof WishlistItem) ? e : new WishlistItem(e));
    }

    addItem(item: WishlistItem) {
        this.items.push(item);
    }
}

interface WishlistInterface {
    title: string;
    id?: number;
    createdAt?: Date;
    completed?: boolean;
    completedAt?: Date;
    items?: WishlistItem[];
}
