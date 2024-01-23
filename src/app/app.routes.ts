import { Routes } from '@angular/router';
import { ShoppingListComponent } from "./features/shopping-list/shopping-list.component";
import { GroceryPickerComponent } from "./features/grocery-picker/grocery-picker.component";

export const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'grocery-picker', component: GroceryPickerComponent }
];
