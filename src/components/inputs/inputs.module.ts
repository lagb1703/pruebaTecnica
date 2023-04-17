import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';//inputs de material
import { FormsModule } from '@angular/forms';//forms para obtener informacion del input
import { GenericTextComponent } from './generic-text/generic-text.component';



@NgModule({
  declarations: [
    GenericTextComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports : [
    GenericTextComponent
  ]
})
export class InputsModule { }
