import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/common/nav/nav.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    navService: NavService
  ) {
    navService.changeNav({title:'RM System', rIcon:'icon=log-in_nav', rEvent: ()=> alert('not ready')});
   }

  ngOnInit(): void {
  }

}
