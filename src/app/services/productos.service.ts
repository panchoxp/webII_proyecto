import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  private API_PRODUCTOS='  http://localhost:3000/productos'

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS)
  }
  getProductosID(id: any):Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)//traer un unico elemento, mas facil asi
  }

//post
postProductos(item: any): Observable<any> {
  return this.http.post(this.API_PRODUCTOS, item)
}
//put-editar
putProductos(item:any): Observable<any> {
  return this.http.put(`${this.API_PRODUCTOS}/${item.id}`,item)
  //return this.http.put(this.API_PRODUCTO+"/"+item.id,item)
}

//DELETE
deleteProductos(id:any):Observable<any>{
  return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
}
}
