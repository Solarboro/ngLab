import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(
    navService: NavService
  ) { 
    navService.changeNav({title: "404", lIcon:'icon=chevron-left_nav', lEvent: ()=> window.history.back()});
  }

  ngOnInit(): void {
  }

}
