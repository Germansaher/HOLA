import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosProductos } from './interfaces/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private htpp:HttpClient) { }
  getDataGerman(){
    return this.htpp.get<DatosProductos[]>('https://fakestoreapi.com/products/')
  }
}
