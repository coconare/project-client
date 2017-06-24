import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) {  }

  getProducts() : Observable<Product[]> {
    return this.http.get('/api/products').map(response => response.json());
  }
}
