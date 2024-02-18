import { Component, OnInit } from '@angular/core';
import { PruebaService } from './prueba.service';
import { DatosProductos } from './interfaces/datos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private serviceDatos:PruebaService){}
  datos!:DatosProductos[];
  ngOnInit(): void {
    this.serviceDatos.getDataGerman().subscribe(data=>this.datos = data);
  }
}
