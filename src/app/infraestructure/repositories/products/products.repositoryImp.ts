import {ProductsRepository} from "../../../domain/interfaces/products/products.repository";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";
import {RequestProps} from "../../dataSources/http/request.model";
import {RequestService} from "../../dataSources/http/request.service";

export class ProductsRepositoryImp implements ProductsRepository {


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
    return await RequestService.sendRequest<ProductsEntity[]>(request);
  }

  async updateProduct(product: ProductsEntity) {
  }

}
