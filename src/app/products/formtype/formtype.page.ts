import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-formtype',
  templateUrl: './formtype.page.html',
  styleUrls: ['./formtype.page.scss'],
})
export class FormtypePage implements OnInit {

  constructor(private productsService: ProductsService, private loadingCtrl: LoadingController, private toastCtrl:ToastController, private Route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('onSubmit');
    if(!form.valid){
      return;
    }

    var type = form.value.type;
    console.log(type);
    this.presentLoading().then(() => {
      // this.productsService.addProduct(id, name, email, url, number);
      if(type=='CPU'){
        this.Route.navigate(['/products/add/form']);
      }else if(type=='Motherboard'){
        this.Route.navigate(['/products/add/formmother']);
      }else if(type=='GPU'){
        this.Route.navigate(['/products/add/formgpu']);
      }else{
        this.Route.navigate(['/products/add/formram']);
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Redirecting...',
      duration: 1000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



}
