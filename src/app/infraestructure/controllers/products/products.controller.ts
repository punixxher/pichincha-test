import {ProductsRepositoryImp} from "../../repositories/products/products.repositoryImp";
import {ProductsRepository} from "../../../domain/interfaces/products/products.repository";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {AsyncApiResponse} from "../../dataSources/http/request.model";
import {GetProducts, SetProduct, UpdateProduct} from "../../../application/usecases/products/products.usecases";
import {makeError} from "../../dataSources/http/request.service";

const productsRepository = new ProductsRepositoryImp()

export class ProductsController {

  static async deleteProduct(id: string) {
    try {

    } catch (e) {

    }
  }

  static async getProducts() {
    try {
        return await GetProducts(productsRepository)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }

  static async setProduct(product: ProductsEntity): AsyncApiResponse<any> {
    try {
      return await SetProduct(productsRepository, product)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }

  static async updateProduct(product: ProductsEntity): AsyncApiResponse<any> {
    try {
      return await UpdateProduct(productsRepository, product)
    } catch (e) {
      return makeError(-1, 'Unknown Error', null, e)
    }
  }
}
