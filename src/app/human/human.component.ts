import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  title = 'Human component';
  //status of your power
  powerLevel = '';
  @Input() myPower;
  constructor() { }

  ngOnInit() {
    
  }

}
