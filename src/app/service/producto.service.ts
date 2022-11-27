import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interface/producto';
import { IResponse } from '../interface/response';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(
    private _httpClient: HttpClient
  ) {}

  listarProductos(): Observable<any> {
    return this._httpClient.get<IResponse>(
      `${environment.API_URL}/inventario/producto/`
    );
  }
  public productocarrito: IProducto[] = [];
  agregarcarrito(producto:IProducto){
    this.productocarrito.push(producto);
    console.log(this.productocarrito);
  }
  getProducto(id: string){
    return this._httpClient.get(`${environment.API_URL}/inventario/producto/${id}/`)
  }
}
