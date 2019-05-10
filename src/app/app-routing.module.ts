//import modules from router
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import Components for routes
import { SermonsComponent }      from './sermons/sermons.component'; // sermons modules component
import { HomeComponent } from './home/home.component'; // home modules component
import { AppComponent } from './app.component'; //app modules component


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'sermons', component: SermonsComponent }
];

//
// const routes: Routes[
//   { path: '', redirectTo: '/', pathMatch: 'full' },
//   { path: 'sermons', component: SermonsComponent }
// ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
