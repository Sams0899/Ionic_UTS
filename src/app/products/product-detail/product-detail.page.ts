import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  loadedProduct: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')){ return; }
      const productId = paramMap.get('productId');
      this.loadedProduct = this.productsService.getProduct(productId);
    });
  }

  deleteProduct(){
    this.presentLoading().then(() =>{
      this.productsService.deleteProduct(this.loadedProduct.id);
      this.router.navigate(['/products']);
      this.presentToast();
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Deleting products...',
      duration: 20000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteProduct()
        }
      ]        
    });
    await alert.present();
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message:  this.loadedProduct.title+' berhasil dihapus',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });

    toast.present();
  }

}
