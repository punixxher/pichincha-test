import {ProductsRepository} from "../../../domain/interfaces/products/products.repository";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {RequestProps} from "../../dataSources/http/request.model";
import {SendRequest} from "../../dataSources/http/request.service";



export class ProductsRepositoryImp implements ProductsRepository{

  async deleteProduct(id: string) {
  }

  async getProducts() {
    const request: RequestProps = {
      get: {
        path: `/products`
      }
    }
    return await SendRequest(request);
  }

   async setProduct(product: ProductsEntity) {
    const request: RequestProps = {
      post: {
        path: `/products`,
        body: product
      }
    }
    return await SendRequest(request);

  }

  async updateProduct(product: ProductsEntity) {
    const request: RequestProps = {
      put: {
        path: `/products`,
        body: product
      }
    }
    return await SendRequest(request);
  }


}
