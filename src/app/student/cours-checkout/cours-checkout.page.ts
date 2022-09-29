import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CodeCheckPage } from '../code-check/code-check.page';

@Component({
  selector: 'app-cours-checkout',
  templateUrl: './cours-checkout.page.html',
  styleUrls: ['./cours-checkout.page.scss'],
})
export class CoursCheckoutPage implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  seance: any;

  ngOnInit() {
    this.ionViewDidEnter();
  }

  ionViewDidEnter(){
    this.seance = localStorage.getItem('seance');
    this.seance = JSON.parse(this.seance);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CodeCheckPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
