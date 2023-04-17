import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-text',
  templateUrl: './generic-text.component.html',
  styleUrls: ['./generic-text.component.css']
})
export class GenericTextComponent {
  @Input() nombre:string = '';//aca se gurdara el nombre del input
  @Input() type:string = '';//aca se guardara el tipo del input
  @Output() outputEvent = new EventEmitter<string>();//aca es el evento para obtener el value

  inputValue: string = '';//esta varaible se utilizara para recojer el valor del input

  /**
   * contrato:void->void
   * proposito: ayuda a recolectar la informacion del input
   */
  onInputChange():void {
    this.outputEvent.emit(this.inputValue);
  }
}
