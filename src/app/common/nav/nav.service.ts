import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nav } from './nav';

@Injectable({
  providedIn: 'root'
})
export class NavService {


  navSubject: BehaviorSubject<Nav> = new BehaviorSubject<Nav>({title: 'RMS Pro'});

  getNavSubject(): BehaviorSubject<Nav>{
    return this.navSubject;
  }

  changeNav(nav: Nav): void{
    this.navSubject.next(nav);
  }

  constructor() { }
}
