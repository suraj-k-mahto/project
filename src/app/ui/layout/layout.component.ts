import { Component, OnInit } from '@angular/core';
import {
  Router, NavigationStart, NavigationCancel, NavigationEnd
} from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loading;
  constructor(private router: Router,
    private ngxService: NgxUiLoaderService) {
    this.ngxService.start();
    console.log('router', this);
    console.log('routersdsdsdsds', this);
  }

  ngOnInit() {
    console.log('routererererer', this);
  }
  ngAfterViewInit() {
    console.log('routererererer', this);
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.ngxService.stop();
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.ngxService.stop();
        }
      });
  }
}

