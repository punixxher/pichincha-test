import {ProductsRepository} from "../../../domain/interfaces/products/products.repository";
import {ProductsEntity} from "../../../domain/entities/products/products.entity";


export const SetProduct = (productsRepository: ProductsRepository, product: ProductsEntity) => {
  return productsRepository.setProduct(product)
}

export const GetProducts = (productsRepository: ProductsRepository) => {
  return productsRepository.getProducts()
}

export const UpdateProduct = (productsRepository: ProductsRepository, product: ProductsEntity) => {
  return productsRepository.updateProduct(product)
}

export const DeleteProduct = (productsRepository: ProductsRepository, id: string) => {
  return productsRepository.deleteProduct(id)
}
