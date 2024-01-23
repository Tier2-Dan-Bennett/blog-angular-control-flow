import { Component, OnInit } from '@angular/core';
import { GroceryShopService } from "../../core/services/grocery-shop.service";
import { GroceryShop } from "../../models/grocery-shop";
import { ShoppingCart } from "../../models/shopping-cart";

@Component({
    selector: 'app-grocery-picker',
    standalone: true,
    imports: [],
    templateUrl: './grocery-picker.component.html',
    styleUrl: './grocery-picker.component.sass'
})
export class GroceryPickerComponent implements OnInit {

    loading: boolean = false;
    groceryShop: GroceryShop | undefined;

    shoppingCart: ShoppingCart = { items: new Map<string, number> };

    constructor(private groceryShopService: GroceryShopService) {

    }

    async ngOnInit(): Promise<void> {
        await this.loadItems();
    }

    async loadItems(): Promise<void> {
        this.loading = true;
        this.groceryShop = await this.groceryShopService.loadGroceryShop();
        this.loading = false;
    }

    chooseItem(item: string): void {
        const quantity = this.shoppingCart.items.get(item);
        if (quantity === undefined) {
            this.shoppingCart.items.set(item, 1);
        } else {
            this.shoppingCart?.items.set(item, quantity + 1);
        }
    }

    removeItem(item: string): void {
        const quantity = this.shoppingCart.items.get(item)!;
        if (quantity > 1) {
            this.shoppingCart.items.set(item, quantity - 1);
        } else {
            this.shoppingCart.items.delete(item);
        }
    }

    clearCart(): void {
        this.shoppingCart.items.clear();
    }
}
