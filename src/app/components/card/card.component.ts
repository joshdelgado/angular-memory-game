import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    wasClicked:boolean;
    @Input('init') cards:string;

  constructor() { }

  ngOnInit() {
      this.wasClicked = false;
  }

  onClick(){
      this.wasClicked= !this.wasClicked;
  }

}
