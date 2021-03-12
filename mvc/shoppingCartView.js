export default class ShoppingCartView 
{
    constructor(){
        this.controller = null;
    }
    registerWith(controller) {
        this.controller = controller;
        this.controller.addView(this); 
    }
    
    displayItem(itemNumber,itemName,itemQuantity,itemPrice) 
    { 
        console.log(`Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`); 
    } 

    buyItem(itemNumber,itemName, itemQuantity, itemPrice) {
        this.controller.buyItem(itemNumber,itemName, itemQuantity, itemPrice);
    }

    changeItemQuantity(itemNumber,newQuantity){
        this.controller.setItemQuantity(itemNumber,newQuantity);       
    }
} 