import { Component, OnInit } from '@angular/core';
import { UIRouter } from '@uirouter/angular';

@Component({
  selector: 'app-ui-router',
  templateUrl: './ui-router.component.html',
  styleUrls: ['./ui-router.component.css']
})
export class UiRouterComponent implements OnInit {

  constructor(
    private uIRouter: UIRouter,
  ) { }

  ngOnInit() {
  }

  getCurrentRouter(): string {
    return this.uIRouter.stateService.current.url;
  }

}
