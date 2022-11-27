import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interface/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: IProducto[]= [];
  total: any = 0;
  cantidad: number = 0;
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this._productoService.productocarrito;
    console.log(this.productos);
    this.cantidad = this.productos.length;
    for (let i = 0; i < this._productoService.productocarrito.length; i++) {
      this.total += this._productoService.productocarrito[i].precioventa;
    }
  }
  eliminarcarrito(i:number){
    this._productoService.productocarrito.splice(i,1);
  }
  
  vaciar(){
    this._productoService.productocarrito.splice(0);
  }

}
