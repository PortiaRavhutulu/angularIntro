import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interface } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
   return this.http.get('https://fakestoreapi.com/products');
  }

  getOneProduct(id:number){
    return this.http.get('https://fakestoreapi.com/products+'+id);
   }

  createProduct(body: Interface){
    return this.http.post('', body);
  }

  updateProduct(id:number, body: Interface){
    return this.http.put(''+id, body );
  }

   deleteProduct(id:number){
    return this.http.delete(''+id);
   }

}
