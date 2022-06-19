import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/common/nav/nav.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    navService: NavService
  ) {

    
    navService.changeNav({
      title: '李公世系表',
      lIcon: 'icon=chevron-left_nav',
      lEvent: ()=>{window.history.back()},
      // rIcon: 'icon=plus_nav',
      // rEvent: ()=>{},
    });
   }

  ngOnInit(): void {
  }

}
