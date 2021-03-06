import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: any;

  constructor(public navCtrl: NavController, public callApi: CallApiProvider) {

  }

  ionViewDidEnter() {
    this.get();

  }

  get() {
    this.callApi.GetAllStudents().subscribe(data => {
      this.students = data;
      console.log(this.students);

    });
  }
  goInfoPage(id: string) {
    this.navCtrl.push("InfoPage", { id: id });
  }
  goCreate() {
    this.navCtrl.push('CreatePage');
  }
  delete(id: string) {
    this.callApi.DeleteStudent(id)
      .subscribe(data => {
        console.log("deleted.");
        this.get();

      })
  }
  goitem(){
    this.navCtrl.push('ItemPage');
  }
  Cart(){
    this.navCtrl.push('CartPage');
  }
}
