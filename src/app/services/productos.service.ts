import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface [] = [];
  productosFiltrados: ProductoInterface [] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos(); 
  }

  private cargarProductos() {

    return new Promise ( (resolve, reject) => {
      
      this.http.get('https://angular-portafolio-e4dbc-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp:any) => {
          // console.log(resp);
          
          this.productos = resp
          this.cargando = false;
          resolve( "" )
        });
    })

  }

  getProducto ( id: string) {
    return  this.http.get<ProductoDescripcion[]>(`https://angular-portafolio-e4dbc-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string) {

    if (this.productos.length === 0) {
      // Tenemos que cargar productos
      this.cargarProductos().then( () => {
        // ejecutar despues de tener los productos
        // aplicar filtro
        this.filtrarProductos( termino);
      });
    } else {
      // aplicar el filtro 
      this.filtrarProductos( termino);
    }    
  }
  
  private filtrarProductos( termino: string) {
    
    console.log( this.productos);
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase()

      if ( prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino) >= 0) {
        this.productosFiltrados.push( prod);
      }
    })
    
  }
}
