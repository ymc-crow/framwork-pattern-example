import ShoppingCartController from './shoppingCartController.js';
import ShoppingCartView from './shoppingCartView.js';



var view = new ShoppingCartView();
var controller = new ShoppingCartController();
view.registerWith(controller);
view.buyItem("Popcorn", 3, 2.50);
console.log("\n");
view.buyItem("Soap", 5, 10.00);
console.log("\n");
view.changeItemQuantity(0,6);
