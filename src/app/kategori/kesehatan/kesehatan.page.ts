import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-kesehatan',
  templateUrl: './kesehatan.page.html',
  styleUrls: ['./kesehatan.page.scss'],
  standalone: false,
})
export class KesehatanPage implements OnInit {
  constructor(private navCtrl:NavController) {}

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack('/kategori')
  }
}
