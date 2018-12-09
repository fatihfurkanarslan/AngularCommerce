import { Injectable, Inject } from '@angular/core';
import{Product } from "./product"
import {ProductList} from "./product-list.mock"
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {



  constructor(private http:Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl?:string):Observable<Product[]>{
  
    if(seoUrl){
      return this.http.get(this.apiUrl+ "/products/"+seoUrl).pipe(map(r => r.json()));
    }else{
      return this.http.get(this.apiUrl+ "/products/").pipe(map(r => r.json()));
    }
    

  }


}
