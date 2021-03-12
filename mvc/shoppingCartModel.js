export default class ShoppingCartModel
{ 
    constructor(itemNumber,itemName, itemQuantity, itemPrice){
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
        this.itemPrice = itemPrice;
        this.itemNumber = itemNumber
    }

    getItemName(){
        return this.itemName;
    }

    getItemQuantity(){
        return this.itemQuantity
    }

    getItemPrice(){
        return this.itemPrice;
    }

    getItemNumber(){
        return this.itemNumber;
    }
} 