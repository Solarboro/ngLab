import { Component, Input, OnInit } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  @Input() nav?: Nav;

  constructor() { }

  ngOnInit(): void {
  }

}
