import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-formgpu',
  templateUrl: './formgpu.page.html',
  styleUrls: ['./formgpu.page.scss'],
})
export class FormgpuPage implements OnInit {

  constructor(private productsService: ProductsService, private loadingCtrl: LoadingController, private toastCtrl:ToastController, private Route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('onSubmit');
    if(!form.valid){
      return;
    }

    const id = form.value.id;
    const name = form.value.name;
    const brand = form.value.brand;
    const model = form.value.model;
    const price = form.value.price;
    const stock = form.value.stock;
    const url = form.value.imageURL;
    this.presentLoading().then(() => {
      this.presentToast();
      this.productsService.addGPU(id, name, brand, model, price, stock ,url);
      this.Route.navigate(['/products']);
    });
  }
  
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving product...',
      duration: 2000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product saved successfully',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}
