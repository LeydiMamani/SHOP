import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export interface Pedido {
  id:string;
  usuario: Usuario;
  correo:string;
  listaProductos: Producto[]
  tipoEntrega:string;
  tipoPago:string;
  referenciaEntrega:string;
  pais:string;
  departamento:string;
  provincia:string;
  distrito:string;
  direccionEntrega: string;
  codigoPostal:number;
  total:number;
  codigoDescuento:string;
}
