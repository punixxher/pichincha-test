import {ProductsRepositoryImp} from "../../repositories/products/products.repositoryImp";

import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {AsyncApiResponse} from "../../dataSources/http/request.model";
import {GetProducts, SetProduct, UpdateProduct} from "../../../application/usecases/products/products.usecases";
import {makeError} from "../../dataSources/http/request.service";



export class ProductsController {

  static productsRepository = new ProductsRepositoryImp()


  static async deleteProduct(id: string) {
    try {

    } catch (e) {

    }
  }

  static async getProducts(): AsyncApiResponse<any> {
    try {
        return await GetProducts(this.productsRepository)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }

  static async setProduct(product: ProductsEntity): AsyncApiResponse<any> {
    try {
      return await SetProduct(this.productsRepository, product)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }

  static async updateProduct(product: ProductsEntity): AsyncApiResponse<any> {
    try {
      return await UpdateProduct(this.productsRepository, product)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }
}
