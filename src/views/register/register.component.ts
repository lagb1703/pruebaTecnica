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
  inputsNames:string[] = ['nombre', 'apellido', 'usuario', 'contraseña', 'repetir Contraseña'];//nombre de los inputs
  inputsTypes:string[] = ['text', 'password'];//nombre de los tipos de inputs
  botonName = "registrarse";//nombre del boton
  inputsValues:string[] = ['', '', '', '', ''];//aca se guardaran los valores de los inputs
  gender = "otro";//aca se guardara el valor del radio button
  checked = false;//aca se guardara el check box

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * contrato: string->void
   * proposito:Obtener el valor de input
   */
  getName(data:string):void{
    this.inputsValues[0] = data;
  }

  /**
   * contrato: string->void
   * proposito:Obtener el valor de input
   */
  getLastName(data:string):void{
    this.inputsValues[1] = data;
  }

  /**
   * contrato: string->void
   * proposito:Obtener el valor de input
   */
  getUserName(data:string):void{
    this.inputsValues[2] = data;
  }

  /**
   * contrato: string->void
   * proposito:Obtener el valor de input
   */
  getPassword(data:string):void{
    this.inputsValues[3] = data;
  }

  /**
   * contrato: string->void
   * proposito:Obtener el valor de input
   */
  getSamePassword(data:string):void{
    this.inputsValues[4] = data;
  }

  /**
   * contrato: void->boolean
   * proposito: validar los formularios
   */
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

  /**
   * contrato: boolean->void
   * proposito: esta funcion se llama cuando se preciona el boton y hace el llamado a la
   * peticion la cual obtiene los nombres, comparamos que no se repita el username
   * y luego le pedimos que cree un nuevo usuario
   */
  click(d:boolean):void{
    if(!this.validarFormulario()){//validamos el formulario
      return;
    }
    this.http.get<usuario[]>('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users').subscribe(
      (response) => {//obtenemos lo usuarios
        let users:usuario[] = response;
        let i:number = 0;
        while(users[i] != undefined){
          if(users[i].usuario == this.inputsValues[2]){//buscamos que el username no este repetido
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
        };//creamos el  nuevo usuario
        this.http.post('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users', data).subscribe(response => {
          alert("usuario Resgistrado");//usuario creado
          this.router.navigate(['']);//redirije al princiío
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
