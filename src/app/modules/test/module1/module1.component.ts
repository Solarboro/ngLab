import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from 'src/app/common/nav/nav.service';

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {



  options: boolean = false;
  newUser: boolean= false;

  change(lang: string){
    this.translate.use(lang);
    // this.translate.get('searchBar.planceholder').subscribe( str => this.placeholder=str);
  }

  iconleft:string = "";
  placeholder: string='';
  constructor(public translate: TranslateService, 
      public navService: NavService
    ) {
    this.translate.use('cn');

    // navService.changeNav({title: 'Module1', lIcon: 'icon=chevron-left'})
    navService.changeNav({
      title: '家族列表', 
      lIcon: 'icon=chevron-left_nav', 
      lEvent: () => {window.history.back()}, 
      rIcon: 'icon=plus_nav', 
      rEvent: () => {this.newUser = true}
    })
   }

  ngOnInit(): void {
  }


  display: boolean = false;

  showDialog() {
      this.display = !this.display;
  }

  contentc(): void{
    alert('alert');
  }
}
