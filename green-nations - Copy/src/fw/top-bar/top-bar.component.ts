import { Component, OnInit } from '@angular/core';
import  {FrameworkConfigService} from "../services/Framework-Config.Service"

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private frameworkCongurationService:FrameworkConfigService ) { }

  ngOnInit() {
  }

}
