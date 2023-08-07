import {ProductsRepository} from "../../../domain/interfaces/products/products.repository";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {RequestProps} from "../../dataSources/http/request.model";
import {RequestService} from "../../dataSources/http/request.service";
import {inject, Injectable} from "@angular/core";



export class ProductsRepositoryImp implements ProductsRepository{



  async deleteProduct(id: string) {
  }

  async getProducts() {
  }

   async setProduct(product: ProductsEntity) {
    const request: RequestProps = {
      post: {
        path: `/products`,
        body: product
      }
    }
    return await ''
  }

  async updateProduct(product: ProductsEntity) {
  }


}
