import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular2RouterComponent } from './angular2-router/angular2-router.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'angular2Router', component: Angular2RouterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Angular2RouterModule { }
