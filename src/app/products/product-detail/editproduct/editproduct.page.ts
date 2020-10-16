import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Product } from '../../products.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
})
export class EditproductPage implements OnInit {

  form: FormGroup;
  productDetail : Product;
  constructor(private alertCtrl: AlertController,private activatedRoute: ActivatedRoute, private productsService: ProductsService, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private Route: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {return;}
      const productId = paramMap.get('productId');
      this.productDetail = this.productsService.getProduct(productId);
    });

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      type: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      base: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boost: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      corethread: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      for: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      size: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stock: new FormControl(null,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      url: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      brand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    })
  }

  onSubmit() {
    const title = this.form.value.title;
    const url = this.form.value.url;
    const type = this.form.value.type;
    const brand = this.form.value.brand;
    const model = this.form.value.model;
    const price = this.form.value.price;
    const stock = this.form.value.stock;
    this.presentLoading().then(() => {
          this.presentToast();
          this.productsService.updateProduct(this.productDetail.id, title, type, url, brand, model, price, stock);
          this.Route.navigate(['/products']);
        });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to edit this product?',
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating products...',
      duration: 2000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product edited successfully',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}
