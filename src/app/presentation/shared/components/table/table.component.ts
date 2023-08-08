import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AppSettings} from "../../appsettings/appsetting";
import {htmlToElement, validateDate} from "../../functions/functions.shared";
import {TableOptionsComponent} from "./table-options/table-options.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() header = false
  @Input() tableData: any = []
  @ViewChild('menuActions') menuActions!: ElementRef
  @ViewChild('container') container!: ViewContainerRef
  @Output() addAction = new EventEmitter()
  @Output() addMenuAction = new EventEmitter()
  @Output() deleteMenuAction = new EventEmitter()
  showActions = false
  assetRoutes = AppSettings.defaultAssetsRoute
  objectKeys = Object.keys;



  constructor(public viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {

  }


  ngOnChanges(changes: any) {
    this.tableData = changes.tableData.currentValue
  }


  valueData(item: any, index: number){
    if(item.type == 'image'){
      return `<img src="${this.tableData.rows[index][item.field]}" width="60px"/>`
    }
    if(validateDate(new Date(this.tableData.rows[index][item.field]))){
      return new Date(this.tableData.rows[index][item.field]).toLocaleDateString('en-GB');
    }
    return this.tableData.rows[index][item.field]
  }

  actionAdd() {
    this.addAction.emit()
  }

  addActions($event: any){
    this.addMenuAction.emit($event)
  }

  deleteActions(event: any){
    this.deleteMenuAction.emit(event)
  }

  openMenu(){
    this.menuActions.nativeElement.style.display = 'block'
  }

}
