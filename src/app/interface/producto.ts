export interface IProducto{
    id:string,
    nombre:string,
    descripcion:string,
    cantidad:number,
    preciocompra:number,
    industria:string,
    garantia:string,
    marca:string,
    imagen: string,
    estado:boolean,
    precioventa:number | string,
    proveedor:number | string,
    sede:number | string
    usuario:number | string
}