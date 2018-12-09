import { Component, OnInit, DoCheck } from '@angular/core';
import {CartService} from "../cart.service"
import {CartItem} from "../cart-item"
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  totalCartItem:number;
  totalCartItemPrice:number;

  cartItems:CartItem[];

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartItems=this.cartService.list();
  }

  ngDoCheck(){

    this.totalCartItem = this.cartService.list().reduce((a,b)=> a+b.quantity,0);
    this.totalCartItemPrice = this.cartService.list().reduce((a,b)=> a+b.quantity * b.product.unitPrice,0);  

  }


}
