import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {AppSettings} from "../../../appsettings/appsetting";

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.scss']
})
export class TableOptionsComponent implements OnInit {
  @ViewChild('btnShowMenu') btnShowMenu!: ElementRef
  @ViewChild('menuActions') menuActions!: ElementRef
  @Input() id: any = ''
  @Output() deleteActions = new EventEmitter<any>()
  @Output() addActions = new EventEmitter<any>()
  assetRoutes = AppSettings.defaultAssetsRoute


  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target!==this.btnShowMenu.nativeElement && e.target!==this.menuActions.nativeElement){
        this.menuActions.nativeElement.style.display = 'none'
      }
    })
  }

  ngOnInit(): void {
  }

  openMenu(){
    this.menuActions.nativeElement.style.display = 'block'
  }

  editItem(id: any){
    this.addActions.emit(id)
  }

  deleteItem(id: any){
    this.deleteActions.emit(id)
  }

}
