import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { producto } from 'src/utilities/formatos/productos';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  name:string = "prueba";
  url:string = 'https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.webp';
  price:number = 10;
  productos:producto[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.consultar();
  }

  /**
   * contrato: void->void
   * proposito: consultar la informacion de los productos en la base de datos
   * y guardarlos en el array productos
   */
  consultar():void{
    this.http.get<any[]>('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/productos').subscribe(
      (response) => {
        this.productos = response;
        console.log(this.productos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
