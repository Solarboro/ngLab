import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/common/nav/nav.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  constructor(
    navService: NavService
  ) {

    
    navService.changeNav({
      title: '宗族',
      lIcon: 'icon=chevron-left_nav',
      lEvent: ()=>{window.history.back()},
      rIcon: 'icon=plus_nav',
      rEvent: ()=>{},
    });
   }

  ngOnInit(): void {
  }

}
