import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() typeBtn: string = 'primary'
  @Input() disabled: boolean = false
  @Output() btnAction = new EventEmitter<any>()

  actionClick() {
    this.btnAction.emit()
  }
}
