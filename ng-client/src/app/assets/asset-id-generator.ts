import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'generator',
  template:`
      <input type="hidden" [ngModel]="countAssetID">
  `
})
export class GeneratorComponent implements OnInit {
  @Input() countAssetID: number = 0
  @Output() notify: EventEmitter<any> = new EventEmitter(true);
  @Output() updateID = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.countAssetID++;
    this.updateID.emit({
      countAssetID: this.countAssetID
    });
  }
}
