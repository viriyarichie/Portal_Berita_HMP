import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saham',
  templateUrl: './saham.page.html',
  styleUrls: ['./saham.page.scss'],
  standalone: false,
})
export class SahamPage implements OnInit {
  constructor(private navCtrl:NavController) {}

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack('/kategori')
  }
}
