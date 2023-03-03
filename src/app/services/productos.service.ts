import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface [] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos(); 
  }

  private cargarProductos() {
    this.http.get('https://angular-portafolio-e4dbc-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp:any) => {
        console.log(resp);
        
        this.productos = resp
        this.cargando = false;        
      });
  }
  
}