import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppSettings} from "../../appsettings/appsetting";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() header = false
  @Output() addAction = new EventEmitter()
  assetRoutes = AppSettings.defaultAssetsRoute


  constructor() { }

  ngOnInit(): void {
  }


  openMenu(){
    debugger
  }

  actionAdd() {
    this.addAction.emit()
  }

}
