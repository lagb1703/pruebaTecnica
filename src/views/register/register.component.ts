import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { usuario } from 'src/utilities/formatos/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  inputsNames:string[] = ['nombre', 'apellido', 'usuario', 'contraseña', 'repetir Contraseña'];
  inputsTypes:string[] = ['text', 'password'];
  botonName = "registrarse";
  inputsValues:string[] = ['', '', '', '', ''];
  gender = "otro";
  checked = false;

  constructor(private http: HttpClient, private router: Router) {}

  getName(data:string):void{
    this.inputsValues[0] = data;
  }

  getLastName(data:string):void{
    this.inputsValues[1] = data;
  }

  getUserName(data:string):void{
    this.inputsValues[2] = data;
  }

  getPassword(data:string):void{
    this.inputsValues[3] = data;
  }

  getSamePassword(data:string):void{
    this.inputsValues[4] = data;
  }

  validarFormulario():boolean{
    if(this.inputsValues[0] == ''){
      alert("El campo de nombre debe estar lleno");
      return false;
    }
    if(this.inputsValues[1] == ''){
      alert("El campo de apellido debe estar lleno");
      return false;
    }
    if(this.inputsValues[2] == ''){
      alert("El campo de usuario debe estar lleno");
      return false;
    }
    if(this.inputsValues[3] == ''){
      alert("El campo de contraseña debe estar lleno");
      return false;
    }
    if(this.inputsValues[4] == ''){
      alert("El campo de repetir contraseña debe estar lleno");
      return false;
    }
    if(this.inputsValues[3] != this.inputsValues[4]){
      alert("El campo contraseña y repetir contraseña debe ser iguales");
      return false;
    }
    return true;
  }


  click(d:boolean):void{
    if(!this.validarFormulario()){
      return;
    }
    this.http.get<usuario[]>('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users').subscribe(
      (response) => {
        let users:usuario[] = response;
        let i:number = 0;
        while(users[i] != undefined){
          if(users[i].usuario == this.inputsValues[2]){
            alert('nombre de usuario ya tomado');
            return;
          }
          i++;
        }
        let data:usuario = {
          id:-1,
          nombre: this.inputsValues[0] + ' ' + this.inputsValues[1],
          contrasena: this.inputsValues[3],
          usuario: this.inputsValues[2]
        };
        this.http.post('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users', data).subscribe(response => {
          alert("usuario Resgistrado");
        }, error => {
          console.error(error);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
