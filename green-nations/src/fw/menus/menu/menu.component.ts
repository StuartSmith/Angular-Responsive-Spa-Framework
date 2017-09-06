import { Component, OnInit } from '@angular/core';
import {MenuService, MenuItem } from "../../services/menu.service"


@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedMenu:MenuItem;

  constructor(private menuService: MenuService ) { }  
  
  ngOnInit() { }
  
  onSelect(menuItem: MenuItem): void {
    this.selectedMenu = menuItem;
  }
}
