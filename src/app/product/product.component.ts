import { Component, OnInit } from '@angular/core';
import{ Product } from './product'
import { ProductList } from './product-list.mock'
import { ProductserviceService} from './productservice.service'
import {NotificationsService} from 'angular2-notifications'
import {CartService} from "../cart/cart.service"
import { Category } from '../category/category';
import {ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductserviceService]
})

export class ProductComponent implements OnInit {


  filterText:string;

  public options = {
 
      }

  products:Product[];
  addedProduct:string;
  constructor(private productService: ProductserviceService,
     private notificationService: NotificationsService,
     private cartService: CartService,
     private activatedRoute:ActivatedRoute) { 

 
  }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params=>{
      this.getProducts(params["seoUrl"])
    });
  this.getProducts();

  }

  getProducts(seoUrl?:string){

   this.productService.getProducts(seoUrl).subscribe(a => this.products=a);
    


  }



  addToCart(product:Product){

    this.addedProduct = product.productName;

    //ürün servise ekleniyor 
    this.cartService.addTocart(product);

    this.notificationService.success("added to cart", product.productName);
    //alert(product.productName + "alert");
  }



}
