import ShoppingCartModel from './shoppingCartModel.js';
export default class ShoppingCartController  
{ 
    constructor(){
        this.model = null;
        this.view = null;
        this.itemList = [];
    }
    
    addView(view) {
        this.view = view;
    }
    addModel(model) {
        this.model = model;
    }
    setItemQuantity(itemNumber,newQuantity){
        if(this.itemList[itemNumber]){
            this.itemList[itemNumber].itemQuantity = newQuantity;
            this.updateView();
        }
    }
  
    updateView() 
    {
        for( let i in this.itemList)      
            this.view.displayItem(this.itemList[i].getItemNumber(),this.itemList[i].getItemName(), this.itemList[i].getItemQuantity(), this.itemList[i].getItemPrice()); 
    }     
    buyItem(itemName, itemQuantity, itemPrice) {
        this.itemList.push(new ShoppingCartModel(this.itemList.length,itemName, itemQuantity, itemPrice));
        this.updateView();
    }
} 