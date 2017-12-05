import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
  title = 'SuperSaiyan component';
  @Input() SuperSaiyanPower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.SuperSaiyanPower *= 90; 
  }


}
