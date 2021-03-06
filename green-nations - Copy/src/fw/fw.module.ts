import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import {  ContentComponent} from './content/Content.component';
import {  TitleBarComponent} from './title-bar/title-bar.component';
import {  FrameworkConfigService} from './services/Framework-Config.Service';
import { ScreenService} from './services/screen.service';
import { TopBarComponent} from './top-bar/top-bar.component';
import { StatusBarComponent} from './status-bar/status-bar.component';
import {  ScreenLarge} from './directives/screen-large-directive';
import {  ScreenBelowLarge} from './directives/screen-below-large.directive';
import { MenuService} from './services/menu.service';
import { MenuComponent} from './menus/menu/menu.component';
import { MenuItemComponent} from './menus/menu-item/menu-item.component';

 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent ,
    StatusBarComponent ,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent
     
  ],
  providers:[
    FrameworkConfigService,
    ScreenService,
    MenuService
    ],
  exports:[
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent
  ]
})
export class FwModule { }
