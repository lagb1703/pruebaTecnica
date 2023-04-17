import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InputsModule } from './../components/inputs/inputs.module';
import { ButtonsModule } from './../components/buttons/buttons.module';
import { ProductsModule } from 'src/components/products/products.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { RegisterComponent } from './register/register.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    component: ToolbarComponent,
    children: [
      { path: '', component: PrincipalComponent},
      { path: 'ingreso', component: IngresoComponent},
      { path: 'productos', component: SearchComponent},
      { path: 'registro', component: RegisterComponent}
    ]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    ToolbarComponent,
    IngresoComponent,
    PrincipalComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    ProductsModule,
    InputsModule,
    ButtonsModule,
    MatRadioModule
  ],
  exports : [
    RouterModule
  ]
})
export class ViewsModule { }
