import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpModule} from '@angular/http'
import {SimpleNotificationsModule, NotificationsService} from 'angular2-notifications'
import {CartService} from "./cart/cart.service";
import { ProductFilterPipe } from './product/product-filter.pipe'
import {FormsModule} from "@angular/forms"
import {Routes, RouterModule} from "@angular/router"

const appRoutes:Routes=[
  {
    path:"",
    redirectTo:"products",
    pathMatch:"full"
  }, 
  {
    path:"products",
    component:ProductComponent
  },
  {
    path:"products/:seoUrl",
    component:ProductComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

    {provide:"apiUrl", useValue:"http://northwindapi.azurewebsites.net/api"},
    NotificationsService,
    CartService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  public options = {
    position:["bottom", "right"],
    timeout:3000,
    lastOnBottom:true
      }


 }
