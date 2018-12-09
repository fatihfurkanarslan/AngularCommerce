import { Injectable } from '@angular/core';
import {Product} from "../product/product"
import {CartItem} from "../cart/cart-item"
import {CART_ITEM_LIST} from "../cart/cart-item-list"

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartItems: CartItem[];

  constructor() { }

addTocart(product:Product):void{

  var addedItem = CART_ITEM_LIST.find(x => x.product.productId == product.productId);
  if(addedItem){

    addedItem.quantity += 1;
  }else{
    let cartItem = new CartItem;
    cartItem.product = product;
    cartItem.quantity = 1;
CART_ITEM_LIST.push(cartItem);
  }

}

list():CartItem[]{
  return CART_ITEM_LIST;
}

clear(){

  CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);

}

removeFromCart(product:Product){

var addedItem = CART_ITEM_LIST.find(x => x.product.productId == product.productId)

  var index = CART_ITEM_LIST.indexOf(addedItem);
  if(addedItem){
    CART_ITEM_LIST.splice(index, 1);
  }
  else{
    alert("silinecek eleman yok");
  }

}

}
