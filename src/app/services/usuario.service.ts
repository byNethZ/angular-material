import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIOS_DATA: Usuario[] = [
    {usuario: 'bynethz@gmail.com', nombre: 'Nethz', apellido: 'Jimenez', sexo: 'Masculino'},
    {usuario: 'yaneth@gmail.com', nombre: 'Yaneth', apellido: 'Gomez', sexo: 'Femenino'},
    {usuario: 'dbliones@gmail.com', nombre: 'Daniel', apellido: 'Garcia', sexo: 'Masculino'},
    {usuario: 'jlobliones@gmail.com', nombre: 'Juan Luis', apellido: 'Ortega', sexo: 'Masculino'},
    {usuario: 'admin@gmail.com', nombre: 'Administrador', apellido: 'General', sexo: 'Masculino'},
    {usuario: 'user@gmail.com', nombre: 'Denys', apellido: 'Vera', sexo: 'Femenino'},
    {usuario: 'example@gmail.com', nombre: 'Nombre', apellido: 'Apellido', sexo: 'Masculino'},
    {usuario: 'correo@gmail.com', nombre: 'Angelica', apellido: 'Ortiz', sexo: 'Femenino'},
    {usuario: 'other@gmail.com', nombre: 'Kristhel', apellido: 'Kantun', sexo: 'Femenino'},
  ];

  constructor() { }

  getUsuarios(){
    return this.USUARIOS_DATA.slice();
  }

  deleteUser(index: number){
    this.USUARIOS_DATA.splice(index, 1);
  }

  addUser(user: Usuario){
    this.USUARIOS_DATA.unshift(user);
  }
}
