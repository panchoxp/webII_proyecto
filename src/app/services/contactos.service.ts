import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  private API_CONTACTOS = "http://localhost:3000/contactos"

  getContactos(): Observable<any> {
    return this.http.get(this.API_CONTACTOS)
  }
  getContactosID(id: any):Observable<any>{
    return this.http.get(`${this.API_CONTACTOS}/${id}`)//traer un unico elemento, mas facil asi
  }

//post
postContactos(item: any): Observable<any> {
  return this.http.post(this.API_CONTACTOS, item)
}
//put-editar
putContactos(item:any): Observable<any> {
  return this.http.put(`${this.API_CONTACTOS}/${item.id}`,item)
  //return this.http.put(this.API_PRODUCTO+"/"+item.id,item)
}

//DELETE
deleteContactos(id:any):Observable<any>{
  return this.http.delete(`${this.API_CONTACTOS}/${id}`)
}
}
