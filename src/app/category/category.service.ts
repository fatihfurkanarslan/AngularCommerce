import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import{Category} from "./category"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:Http,  @Inject('apiUrl') private apiUrl) { }

  getCategories():Observable<Category[]>{
  
    return this.http.get(this.apiUrl+"/categories").pipe(map(x=>x.json()));

  }

}
