import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.sass'
})
export class ShoppingListComponent {

    shoppingList: string[] = [];

    options: string[] = [
        'apples',
        'carrots',
        'steak',
        'washing up liquid',
        'socks',
        'toothpaste',
        'mouthwash',
        'yoghurt',
        'tomatoes',
        'cereal',
        'paint',
        'perfume',
        'aftershave',
        'lemons',
        'coffee',
        'tea bags',
        'sugar',
        'honey',
        'dog food',
        'cat food',
        'fish flakes'
    ];

    populateList(): void {
        if (this.shoppingList.length === this.options.length) {
            return;
        }
        const item: number = Math.floor(Math.random() * 100) % this.options.length;
        this.shoppingList.push(this.options.splice(item, 1)[0]);
    }
}
