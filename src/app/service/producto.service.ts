import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interface/producto';
import { IResponse } from '../interface/response';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  public cantidadProductos: number = 0;
  constructor(
    private _httpClient: HttpClient,
    //private _cookieService: CookieService
  ) {}

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    //Authorization: `Bearer ${this._cookieService.get('access')}`,
  });

  listarProductos(): Observable<any> {
    return this._httpClient.get<IResponse>(
      `${environment.API_URL}/inventario/producto/`,
      {
        headers: this.httpHeaders,
      }
    );
  }
}
