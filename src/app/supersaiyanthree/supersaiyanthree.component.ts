import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
  title = 'SuperSaiyan Three component';
  @Input() SuperSaiyanThreePower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.SuperSaiyanThreePower *= 250; 
  }


}
