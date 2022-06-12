import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClanService {


  clans: any[] = [
    {
      cName: '',
      preface: '',
      numOfmember: 100
    },
    {
      cName: '',
      preface: '',
      numOfmember: 80
    }
  ];

  clanSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.clans);

  constructor() { }
}
