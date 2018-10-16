import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { UiRouterComponent } from './ui-router/ui-router.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';

const routes = [
  {name: 'home', url: '/home', component: HomePageComponent},
  {name: 'uiRouter', url: 'home/uiRouter', component: UiRouterComponent},
  {name: 'app', url: '/', redirectTo: 'home', component: AppComponent},
];

@NgModule({
  imports: [
    UIRouterModule.forRoot({states: routes}),
  ],
  exports: [UIRouterModule],
})
export class UiRouterModule { }
