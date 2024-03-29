import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
    this.products = this.productsService.getAllProduct();
  }

}
