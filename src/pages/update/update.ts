import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  name;
  value:string;
  item;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.value = this.item.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  update(){
 
    var database = firebase.database();
    database.ref('/shoppingList/' + this.item.key).set({name:this.name});
 
    this.navCtrl.push("HomePage");
  }
}
