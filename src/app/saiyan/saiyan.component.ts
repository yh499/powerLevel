import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  title = 'Saiyan component';
  @Input() SaiyanPower;
  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(){
    this.SaiyanPower *= 10; 
  }

}
