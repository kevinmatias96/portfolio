import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  constructor(public _infoPaginaService: InfoPaginaService){
    
  }

  anio: number = new Date().getFullYear();
}
