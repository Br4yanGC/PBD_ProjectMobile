import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProductByProductId(product_id: any) {
    return this.http.get<any>(`http://localhost:9000/products/${product_id}`);
  }
  getProductsByType(user_id: any, product_type: any) {
    return this.http.get<any>(`http://localhost:9000/products?user_id=${user_id}&product_type=${product_type}`);
  }
  getProductsCart(user_id: any) {
    return this.http.get<any>(`http://localhost:9000/productsCart?user_id=${user_id}}`)
  }
  insertProduct(product: any) {
    return this.http.post<any>('http://localhost:9000/products', product);
  }
  insertToCart(product: any) {
    return this.http.post<any>('http://localhost:9000/cart', product);
  }
  deleteProduct(user_id: any, product_id: any) {
    return this.http.delete<any>(`http://localhost:9000/products/${user_id}/${product_id}`);
  }
  deleteProductCart(user_id: any, product_id: any) {
    return this.http.delete<any>(`http://localhost:9000/productsCart/${user_id}/${product_id}`)
  }
  updateProduct(product_id: any, product: any) {
    return this.http.put<any>(`http://localhost:9000/products/${product_id}`, product);
  }
}
