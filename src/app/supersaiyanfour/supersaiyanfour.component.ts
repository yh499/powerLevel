import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnInit {
  title = 'SuperSaiyan Four component';
  @Input() SuperSaiyanFourPower;
  constructor() { }
 

  ngOnChanges(){
    this.SuperSaiyanFourPower *= 500; 
  } 
  ngOnInit() {
  }

}
