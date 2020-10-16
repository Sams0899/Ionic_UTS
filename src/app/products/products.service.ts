import { Injectable } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 'r1',
      title: 'Processor',
      type: 'CPU',
      model: 'i7 8999',
      brand: 'Intel',
      base: 500,
      boost: '1000',
      corethread: '8',
      speed: '5000ghz',
      for:'',
      chipset: 'chips',
      size: '',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41i%2BsZeH71L._AC_UL474_SR474,450_.jpg',
      price:20000,
      stock:20
    },
    {
      id: 'r2',
      title: '8gb DDR 4',
      type: 'RAM',
      model: 'CMSO8GX3',
      brand: 'Corsair',
      base:0,
      boost: '',
      corethread: '',
      speed: '1000ghz',
      for:'',
      chipset: '',
      size:'8gb',
      imageUrl: 'https://thermaltake.azureedge.net/pub/media/catalog/product/cache/25e62158742be0ef47d2055284094406/db/imgs/pdt/gallery/CL-W239-CA00SW-A_d6ef6bacbe3a4409b3edb28ca85508c0.jpg',
      price:4000,
      stock:44
    },
    {
      id: 'r3',
      title: 'Motherboard ROG',
      model: 'AX 578',
      type: 'Motherboard',
      brand: 'Gigabyte',
      base:0,
      boost: '',
      corethread: '',
      speed: '1000ghz',
      for:'Intel Processor',
      chipset: '10',
      size:'8gb',
      imageUrl: 'data:image/jpeg;base64,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',
      price:30000,
      stock:30
    },
    {
      id: 'r4',
      title: 'Nvidia 1080',
      model: '1080 TI',
      type: 'GPU',
      brand: 'Nvidia',
      base:0,
      boost: '',
      corethread: '',
      speed: '1000ghz',
      for:'Intel Processor',
      chipset: '10',
      size:'8gb',
      imageUrl: 'https://miro.medium.com/max/700/1*QY1GTx_UVf2l236UTaYuHw.jpeg',
      price:220000,
      stock:22
    }
  ]

  constructor() { }

  getAllProduct(){
    return [...this.products];
  }

  addCPU(id_: string, title_: string, brand_: string, baseclock_: number, boostclock_: string, corenumber_:string, type_:string, model_:string, price_:number, stock_:number, url_:string){

    this.products.push({
      id: id_,
      title: title_,
      model: model_,
      type: 'CPU',
      brand: brand_,
      base:baseclock_,
      boost: boostclock_,
      corethread: corenumber_,
      speed: '1000ghz',
      for:'',
      chipset: '',
      size:'',
      imageUrl: url_,
      price:price_,
      stock:stock_,
    });
  }

  addGPU(id_: string, title_: string, brand_: string, model_:string, price_:number, stock_:number, url_:string){

    this.products.push({
      id: id_,
      title: title_,
      model: model_,
      type: 'GPU',
      brand: brand_,
      base:0,
      boost: '',
      corethread: '',
      speed: '',
      for:'',
      chipset: '',
      size:'',
      imageUrl: url_,
      price:price_,
      stock:stock_,
    });
  }

  
  addMother(id_: string, title_: string, brand_: string,chipset_:string,procsfor_:string, model_:string, price_:number, stock_:number, url_:string){

    this.products.push({
      id: id_,
      title: title_,
      model: model_,
      type: 'Motherboard',
      brand: brand_,
      base:0,
      boost: '',
      corethread: '',
      speed: '',
      for: procsfor_,
      chipset: chipset_,
      size:'',
      imageUrl: url_,
      price:price_,
      stock:stock_,
    });
  }

  
  addRam(id_: string, title_: string, brand_: string, model_:string,speed_:string,size_:string, price_:number, stock_:number, url_:string){

    this.products.push({
      id: id_,
      title: title_,
      model: model_,
      type: 'RAM',
      brand: brand_,
      base:0,
      boost: '',
      corethread: '',
      speed: speed_,
      for: '',
      chipset: '',
      size:size_,
      imageUrl: url_,
      price:price_,
      stock:stock_,
    });
  }



  deleteProduct(productId:string){
    this.products = this.products.filter(product=> {
      return product.id !== productId;
    });
  }

  getProduct(productId: string){
    return {...this.products.find( 
      product => {
        return product.id === productId;
      }
    )};
  }

  updateProduct(id_: string, title_: string,type_:string, url_: string, brand_: string, model_: string,price_:number, stock_:number){
    let productEdit = this.products.filter(product => {
      return product.id !== id_;
    });
    productEdit.push({
      id: id_,
      title: title_,
      model: model_,
      type: type_,
      brand: brand_,
      base:0,
      boost: '',
      corethread: '',
      speed: '',
      for: '',
      chipset: '',
      size:'',
      imageUrl: url_,
      price:price_,
      stock:stock_,
    });
    this.products = productEdit;
  }
}
