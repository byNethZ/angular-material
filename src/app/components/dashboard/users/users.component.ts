

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsuarios : Usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _userService: UsuarioService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadUsers(){
    this.listUsuarios = this._userService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  deleteUser(index: number){
    console.log(index);
    this._userService.deleteUser(index);
    this.loadUsers();
    this._snackBar.open('El usuario fue eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }
}
