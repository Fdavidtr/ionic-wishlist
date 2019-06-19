
export class WishlistItem implements WishlistItemInterface {

    desc: string;
    completed: boolean;

    constructor( {desc, completed = false}: WishlistItemInterface ) {
        this.desc = desc;
        this.completed = completed;
    }
}

interface WishlistItemInterface {
    desc: string;
    completed?: boolean;
}
