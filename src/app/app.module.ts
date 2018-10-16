import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Angular2RouterComponent } from './angular2-router/angular2-router.component';
import { Angular2RouterModule } from './angular2Router.module';
import { UiRouterComponent } from './ui-router/ui-router.component';
import { UiRouterModule } from './ui-router.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Angular2RouterComponent,
    UiRouterComponent,
  ],
  imports: [
    BrowserModule,
    Angular2RouterModule,
    // UiRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
