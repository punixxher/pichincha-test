import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import { ButtonComponent } from './buttons/button/button.component';
import { TableOptionsComponent } from './table/table-options/table-options.component';
import {GlobalService} from "../services/global.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    TableComponent,
    ButtonComponent,
    TableOptionsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [GlobalService],

  exports: [
    TableComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
