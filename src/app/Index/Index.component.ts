import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-Index',
  templateUrl: './Index.component.html',
  styleUrls: ['./Index.component.css']
})
export class IndexComponent implements OnInit {
  header = false;
  scroll = false;
  @HostListener('window:scroll', ['$event'])
  Scroll(_Event: any) {
    //客戶端高度
    var clientH = document.documentElement.clientHeight;
    //body高度
    var bodyH = document.body.clientHeight;
    //滾動的高度
    var scrollTop = document.documentElement.scrollTop;
    this.scroll = (scrollTop > 0) ? true : false;
    // scrollY > 0 ? console.log(_Event) : '';
    // this.Scroll = (scrollY > 0) ? '123' : '456';
  }
  constructor(private router: Router) { }
  toggle(_Number: number) {
    // this.header = _Number == 0 ? false : true;
  }
  ngOnInit() {
  }

}
