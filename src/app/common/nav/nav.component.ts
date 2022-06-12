import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  nav?: any
  iconPath?: string;

  constructor(
    public navService: NavService
  ) { 
    this.iconPath = environment.iconPath;
  }

  ngOnInit(): void {
    // subscribe Nav
    this.navService.getNavSubject().subscribe(
      nav => this.nav = {...nav}
    );
  }

}
