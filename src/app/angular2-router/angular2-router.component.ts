import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular2-router',
  templateUrl: './angular2-router.component.html',
  styleUrls: ['./angular2-router.component.css']
})
export class Angular2RouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getCurrentRouter(): string {
    return this.router.url;
  }

}
