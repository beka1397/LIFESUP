import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'goTo',
  templateUrl: './goTo.component.html',
})
export class goToComponent implements OnInit{

  @Input() name = "";
  @Input() image = "";
  @Output() lacosa = new EventEmitter<Event>();



  constructor() {

  }

  ngOnInit(){
    console.log('funciona puta')
  }

  sendLacosa(event: Event){
    this.lacosa.emit(event)
  }
}
