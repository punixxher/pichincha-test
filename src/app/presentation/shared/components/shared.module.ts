import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import { ButtonComponent } from './buttons/button/button.component';



@NgModule({
  declarations: [
    TableComponent,
    ButtonComponent
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
