import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Initial Power Level';
  //dropdwon number aray 
  powerArray = [];
  //
  powerNum: number; 
  myPower;

//option menudrop down 
  ngOnInit(){
    for (let i =1; i < 101; i++){
      this.powerArray.push(i);
    }
  }

  GetPower(){
    this.myPower = this.powerNum;
    console.log(this.powerNum);
  }



}
