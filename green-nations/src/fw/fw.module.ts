import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import {  ContentComponent} from './content/Content.component';
import {  TitleBarComponent} from './title-bar/title-bar.component';
 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent
  ],
  exports:[
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent
  ]
})
export class FwModule { }