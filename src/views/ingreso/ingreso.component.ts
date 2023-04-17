import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';//para hacer peticiones http

import { usuario } from 'src/utilities/formatos/usuarios';
import { Router } from '@angular/router';//para hacer routering

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {
  inputsNames:string[] = ['usuario', 'contraseña'];//aca se guardara los nombres de los inputs
  inputsTypes:string[] = ['text', 'password'];//aca se guardara los tipos de los inputs
  inputsValue:string[] = ['', ''];//aca se guardara el valor de los inputs el primero es para el nombre,
  //el segundo para la contraseña
  botonName:string = "Ingresar";//nombre del boton
  users:usuario[] = [];//aca se gurdara la lista de usuario que llegue tras la peticion

  constructor(private http: HttpClient, private router: Router) {}

  getName(data:string){
    this.inputsValue[0] = data;
  }

  getPassword(data:string){
    this.inputsValue[1] = data;
  }

  validarFormulario():boolean{
    if(this.inputsValue[0] == ''){
      alert("debes llenar el campo de nombre");
      return false;
    }
    if(this.inputsValue[1] == ''){
      alert("debes llenar el campo de contraseña");
      return false;
    }
    return true;
  }

  click(data:boolean):void{
    if(!this.validarFormulario()){
      return;
    }
    this.http.get<usuario[]>('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users').subscribe(
      (response) => {
        this.users = response;
        let i:number = 0;
        while(this.users[i] != undefined){
          if(this.users[i].usuario == this.inputsValue[0]){
            console.log(this.inputsValue[1] == this.users[i].contrasena);//NXkykoYS_grpSPx
            if(this.users[i].contrasena == this.inputsValue[1]){
              alert("bienvenido usuario");
              this.router.navigate(['']);
              return;
            }
          }
          i++;
        }
        alert("usuario o contraseña invalidos");
        return;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
