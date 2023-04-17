import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  /**
   * contrato: void->void
   * proposito: redireccionar a mi github, se ejecutara cuando se precione el boton.
   */
  redireccion():void{
    location.href = 'https://github.com/lagb1703';
  }
}
