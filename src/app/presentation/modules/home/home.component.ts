import {Component, OnInit} from '@angular/core';
import {AppSettings} from "../../shared/appsettings/appsetting";
import {Router} from "@angular/router";
import {ProductsController} from "../../../infraestructure/controllers/products/products.controller";
import {GlobalService} from "../../shared/services/global.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assetRoutes = AppSettings.defaultAssetsRoute
  dataTable = {
    actions: true,
    columns: [
      {field: 'logo', title: 'Logo', type: 'image'},
      {field: 'name', title: 'Nombre del producto'},
      {field: 'description', title: 'Descripción'},
      {field: 'date_release', title: 'Fecha de liberación'},
      {field: 'date_revision', title: 'Fecha de reestructuración'}
    ],
    rows: []
  }


  constructor(private router: Router, private globalService: GlobalService) {

  }

  ngOnInit(): void {
    void this.loadData()
  }

  async addProduct() {
    void this.router.navigate(['/registro'])
  }

  async loadData() {
    const response = await ProductsController.getProducts()
    if(response.error) {
      return
    }
    if(response.data) {
      this.dataTable.rows = response.data
      this.globalService.originalRows = this.dataTable.rows
    }
  }

  async deleteMenuAction($event: any) {
    const response = await ProductsController.deleteProduct($event)
    if(response.error){
      return
    }
    if(response.data){
    }
  }

  addMenuAction($event: any) {
    this.globalService.rowEditData = this.dataTable.rows.find((item: any)=> item.id === $event)
    void this.router.navigate(['/registro/editar'])
  }


}
