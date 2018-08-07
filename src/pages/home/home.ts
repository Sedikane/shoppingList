
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
* Generated class for the HomePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
declare var firebase;
@IonicPage()
@Component({
 selector: 'page-home',
 templateUrl: 'home.html',
})
export class HomePage {
 name;
value:string;
items = [];
cuisine = {
  key:'',
  name : ''
};
constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  //Retrieve The List
  this.getDataFromDB();
}

getDataFromDB(){

  //Retrieve The List
  firebase.database().ref('/cuisine/').on("value", (snapshot) =>
  {
    this.items = [];
    snapshot.forEach((snap) =>
    {
      this.cuisine.key = snap.key;
      console.log(snap.val().name + ' key ' + snap.key)
      this.items.push({name:snap.val().name, key:snap.key});
      return false;
    });
  });

}

ionViewDidLoad() {
  console.log('ionViewDidLoad HomePage');
}

writeShoppingList(){
  this.items = [];
  console.log(this.name);

  this.cuisine.name = this.name;
  
  var database = firebase.database();

  database.ref('/cuisine/').push({name:this.cuisine.name});

}


update(item){
  this.navCtrl.push("UpdatePage",{item:item});
}  

delete(item){
 
  var database = firebase.database();
  database.ref('/cuisine/'+item).remove(item.key);
  // this.items = [item.key];
  // alert('The user is deleted successfully!');
 
}
// update(){
 
//   var database = firebase.database();
//   database.ref('/cuisine/' + this.item.key).set({name:this.name});

//   this.navCtrl.push("HomePage");

// showConfirm(item) {
//   const confirm = this.alertCtrl.create({
//     title: item.name,
//     message: 'Do you want to?',
//     buttons: [
//       {
//         text: 'Delete',
//         handler: () => {
//           this.delete(item);
//         }
//       },
//       {
//         text: 'Update',
//         handler: () => {
//           this.update(item);
//         }
//       }
//     ]
//   });
//   confirm.present();
// }


}