import { Injectable } from '@angular/core';
import { GroceryShop } from "../../models/grocery-shop";

@Injectable({
    providedIn: 'root'
})
export class GroceryShopService {

    async loadGroceryShop(): Promise<GroceryShop> {

        return new Promise((resolve, reject) =>
            setTimeout(
                () => {
                    resolve({ items: [
                            'apple (green)', 'apple (red)', 'avocado', 'banana',
                            'cherry', 'grapes', 'kiwi', 'lemon', 'orange',
                            'pear', 'pineapple', 'strawberry', 'tomato', 'watermelon'
                        ] });
                },
                2000
            )
        );
    }
}
