// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the HomePage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */
// declare var firebase
// @IonicPage()
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html',
// })
// export class HomePage {
// name;
// items=[];
// shoppingList={
//   _key:'',
//   name:''
// }
// info:any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     firebase.database().ref('/shoppingList/').on("value",(snapshot)=>{
//       snapshot.forEach((snap)=>{
//         this.shoppingList._key = snap.key;
//         console.log(snap.val().name+'key'+snap.key)
//         this.items.push({name:snap.val().name,key:snap.key});
//       return false;
//       });
//     });
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad HomePage');
//   }
  
//   writeShoppingList(name){
//     this.items=[];
//     console.log(this.name);
//     this.shoppingList.name = this.name;
//     var database = firebase.database();
//      database.ref('/shoppingList/').push(this.shoppingList);
//   }
//   update(key){
//    var database = firebase.database();
//    database.ref('/shoppingList/'+key).set(this.name);
 
//   }
//   removeItem(key){
//     var database=firebase.database();
//     database.ref('/shoppingList/'+key).remove();

//   }
  
// }
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
  _key:'',
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
    snapshot.forEach((snap) =>
    {
      this.cuisine._key = snap.key;
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
  database.ref('/cuisine/'+item.key).remove();
  this.items = [];

}

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