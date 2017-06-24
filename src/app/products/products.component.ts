import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product';
import { ProductsService } from '../service/products.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [
    ProductsService
  ]
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productsService : ProductsService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

}
