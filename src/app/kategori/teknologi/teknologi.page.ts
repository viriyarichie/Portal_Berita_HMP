import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-teknologi',
  templateUrl: './teknologi.page.html',
  styleUrls: ['./teknologi.page.scss'],
  standalone: false,
})
export class TeknologiPage implements OnInit {
  constructor(private navCtrl:NavController) {}

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack('/kategori')
  }
}
