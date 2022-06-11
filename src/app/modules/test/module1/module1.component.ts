import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from "src/environments/environment";

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {



  change(lang: string){
    this.translate.use(lang);
    // this.translate.get('searchBar.planceholder').subscribe( str => this.placeholder=str);
  }

  iconleft:string = "";
  placeholder: string='';
  constructor(public translate: TranslateService) {
    this.translate.use('cn');


    this.translate.get('searchBar.planceholder').subscribe( str => this.placeholder=str);


    this.iconleft = `${environment.iconPath}icon=users.svg`;
   }

  ngOnInit(): void {
  }


  display: boolean = false;

  showDialog() {
      this.display = !this.display;
  }
}
