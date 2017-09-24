import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';



/**
 * Generated class for the QueryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-query',
  templateUrl: 'query.html',
})
export class QueryPage {
  queryRef$ : FirebaseListObservable<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams
      ,private database: AngularFireDatabase) {
        this.queryRef$ = this.database.list('shopping-list',{
          query:{
            orderByChild: 'itemName',
            equalTo:'empanada'
          }
        
        });
        this.queryRef$.subscribe(x=>console.log(x));
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryPage');
  }

}
