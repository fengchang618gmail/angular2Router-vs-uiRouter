import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIRouter } from '@uirouter/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    // private uIRouter: UIRouter,
  ) { }

  ngOnInit() {
  }

  goAngular2Router(): void {
    // this.router.navigate(['/angular2Router']);
    this.router.navigateByUrl('/angular2Router');
  }

  goUIRouter(): void {
    // this.uIRouter.stateService.go('uiRouter');
  }

}
