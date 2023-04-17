import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonOneComponent } from './button-one/button-one.component';

import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonOneComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    ButtonOneComponent
  ]
})
export class ButtonsModule { }
