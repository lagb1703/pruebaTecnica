import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-one',
  templateUrl: './button-one.component.html',
  styleUrls: ['./button-one.component.css']
})
export class ButtonOneComponent {
  @Input() nombre:string = '';//obtenemos el nombre del boton
  @Output() event:EventEmitter<boolean> = new EventEmitter<boolean>();//damos un evento emiter al padre para cuando se de click

  /**
   * contrato: void -> void
   * proposito: la funcion emite el evento de event cada vez que el boton es precionado.
   */
  onClick():void{
    this.event.emit(true);
  }
}
