import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor( public _infoPaginaService: InfoPaginaService,
                private router: Router) {
    
  }

  buscarProducto( termino: string) {

    if ( termino.length<1 ) {
      return;
    }
    console.log( termino);
    this.router.navigate(['/search', termino]);
  }
}
