import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import { ButtonComponent } from './buttons/button/button.component';
import { TableOptionsComponent } from './table/table-options/table-options.component';



@NgModule({
  declarations: [
    TableComponent,
    ButtonComponent,
    TableOptionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
