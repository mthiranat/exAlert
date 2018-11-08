import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert1() {
    const alert = this.alertCtrl.create({
      title: "แจ้งเตือนการใช้งาน",
      subTitle: "ของระบบ",
      buttons: [
        "OK"
      ]
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: "โปรดใส่รหัสผ่านที่สมัครไว้",
      subTitle: "จำนวน 6 ตัวขึ้นไป",
      inputs: []
    });
    alert.present();
  }

}
