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

  //se tiene que llamar a los objetos en el contructor
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * contrato: string->void
   * proposito: obtener el valor del input del nombre
   */
  getName(data:string):void{
    this.inputsValue[0] = data;
  }

  /**
   * contrato: string->void
   * proposito: obtener el valor del input del password
   */
  getPassword(data:string):void{
    this.inputsValue[1] = data;
  }

  /**
   * contrato: void->boolean
   * proposito: valida que los inputs esten correctamente llenados antes de pasar a la peticion
   */
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

  /**
   * contrato: boolean -> void
   * proposito: autentifica el usuario.
   */
  click(data:boolean):void{
    if(!this.validarFormulario()){//validamos el formulario
      return;
    }
    this.http.get<usuario[]>('https://643b166f70ea0e66028e8379.mockapi.io/api/v1/users').subscribe(//hacemos la consulta
      (response) => {
        this.users = response;
        let i:number = 0;
        while(this.users[i] != undefined){//llegamos desde el primer elemente hasta el ultimo antes de undefined
          if(this.users[i].usuario == this.inputsValue[0]){//comparamos si el nombre es correcto
            if(this.users[i].contrasena == this.inputsValue[1]){//comparamos si el contraseña es correcto
              alert("bienvenido usuario");
              this.router.navigate(['']);//redirije al princiío
              return;
            }
          }
          i++;//incrementa
        }
        alert("usuario o contraseña invalidos");//no se encontro coincidencia
        return;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
