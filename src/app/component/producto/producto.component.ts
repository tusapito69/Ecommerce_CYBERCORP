import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { IProducto } from '../../interface/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  public productos: IProducto[] = [];
  public page!: number;
  producto: IProducto[] = [];
  productodetalle!: IProducto;
  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
    this.listarProductos();
  }

  listarProductos(): void {
    this._productoService.listarProductos().subscribe((data: IProducto[]) => {
      console.log(data);
      this.productos = data;
    });
  }

  //ANADIR CARRITO
  agregarcarrito(producto:IProducto){
    this._productoService.agregarcarrito(producto);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto Añadido',
      showConfirmButton: false,
      timer: 1000
    })
  }
  detalleProducto(deproducto: IProducto): void {
    this.productodetalle = deproducto;
  }
}
