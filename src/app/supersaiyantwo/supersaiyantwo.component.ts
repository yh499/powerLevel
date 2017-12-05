import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})


export class SupersaiyantwoComponent implements OnInit {
  title = 'SuperSaiyan Two component';
  powerLevel = '';
  powerStatus = '';
  @Input() SuperSaiyanTwoPower;
  constructor() { }

  ngOnInit() {
  }

   ngOnChanges(){
    this.SuperSaiyanTwoPower *= 150; 
  }


}
