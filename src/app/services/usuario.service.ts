import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  USUARIOS_DATA: Usuario[] = [
    {usuario: 'bynethz@gmail.com', nombre: 'Nethz', apellido: 'Jimenez', sexo: 'H'},
    {usuario: 'yaneth@gmail.com', nombre: 'Yaneth', apellido: 'Gomez', sexo: 'F'},
    {usuario: 'dbliones@gmail.com', nombre: 'Daniel', apellido: 'Garcia', sexo: 'H'},
    {usuario: 'jlobliones@gmail.com', nombre: 'Juan Luis', apellido: 'Ortega', sexo: 'H'},
    {usuario: 'admin@gmail.com', nombre: 'Administrador', apellido: 'General', sexo: 'H'},
    {usuario: 'user@gmail.com', nombre: 'Denys', apellido: 'Vera', sexo: 'F'},
    {usuario: 'example@gmail.com', nombre: 'Nombre', apellido: 'Apellido', sexo: 'H'},
    {usuario: 'correo@gmail.com', nombre: 'Angelica', apellido: 'Ortiz', sexo: 'F'},
    {usuario: 'other@gmail.com', nombre: 'Kristhel', apellido: 'Kantun', sexo: 'F'},
  ];

  constructor() { }

  getUsuarios(){
    return this.USUARIOS_DATA.slice();
  }

  deleteUser(index: number){
    this.USUARIOS_DATA.splice(index, 1);
  }
}
