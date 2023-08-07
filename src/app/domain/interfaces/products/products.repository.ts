import {ProductsEntity} from "../../entities/products/products.entity";

export interface ProductsRepository {
  setProduct(product: ProductsEntity):  any
  getProducts():  any
  updateProduct(product: ProductsEntity):  any
  deleteProduct(id: string):  any
}
