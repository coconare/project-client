import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = "Hanbit Node";
  menus : Array<any> = [{
    name : 'Home',
    path : '/'
  }, {
    name : 'Products',
    path : '/products'
  }, {
    name : 'Contact',
    path : '/contact'
  }];

  constructor() { }

  ngOnInit() {
  }

  selectMenu(e){
    let el = e.target;
    $(el).closest('ul').find('li').removeClass('active');
    $(el).closest('li').addClass('active');
  }
}
