import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menu: Menu[];

  constructor(
    private _menuService: MenuService
  ) {
    this.menu = [];
  }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(){
    this._menuService.getMenu().subscribe(
      data => {
        this.menu = data;
      }
    )
  }

}
