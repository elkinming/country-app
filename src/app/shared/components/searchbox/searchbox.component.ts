import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: []
})
export class SearchboxComponent {

  @Input()
  placeholder: string = ''

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>;

  constructor() { }

  sendValue(value: string){
    // console.log({value});
    this.onValue.emit(value);
  }

}
