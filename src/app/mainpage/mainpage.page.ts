import { Component, OnInit } from '@angular/core';
import { Product } from '../products/products.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {
  products: Product[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    
  }
  ionViewDidEnter() {
    this.products = this.productsService.getAllProduct();
  }

}
