import { Injectable } from '@angular/core';
import { Producto } from '../Models/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  listacarrito: Producto[] = []

}
