import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

//Public Mehtod using PROTOTYPE
// ShoppingList.prototype.addItem = function (item) {
//   this.groceries = this.groceries.concat([item]);
// }

// class ShoppingList2 {
//     groceries : string [] = [];
//     constructor() {
//         this.groceries = [];
//     }

//     addItem(item: string){
//         this.groceries = [... this.groceries, item];
//     }

//     removeItem(item: string){
//         this.groceries = this.groceries.filter( (grocery) => item !== grocery);
//     }
// }

// const myNewList = new ShoppingList2();
// myNewList.addItem('Pear');
// myNewList.addItem('Pizza');
// myNewList.addItem('Water');

// console.log(myNewList.groceries);

// myNewList.removeItem('Pear');

// console.log(myNewList);


// let name = "Neftali Hernandez";
// console.log(upperCase(name));