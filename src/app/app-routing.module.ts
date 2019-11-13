import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { CustompreloadstartegyService } from './services/custompreloadstartegy.service';
import { PageNotFoundComponent } from './shared/Components/page-not-found/page-not-found.component';
import { CustomCanActivateService } from './services/custom-can-activate.service';
import { NotAuthorizedComponent } from './shared/Components/not-authorized/not-authorized.component';


//Angular Eager loading

// const routes: Routes = [
//   { path: '', redirectTo:"adjudication", pathMatch:"full"},
//   { path: 'pv', component:HomeComponent},
// ];

//Angular Lazy loading

const routes: Routes = [
  {
    path: '',
    redirectTo: '/adjudication',
    pathMatch: 'full'
  }, //Eager Loading
  {
    path: 'claims',
    data: { preload: true },
    loadChildren: './modules/claims/claims.module#ClaimsModule'
  }, //Preloading
  {
    path: 'um',
    data: { preload: true },
    loadChildren: './modules/um/um.module#UmModule'
  }, //Preloading
  {
    path: 'pv',
    canActivate: [CustomCanActivateService],
    loadChildren: './modules/pv/pv.module#PvModule'
  }, //Lazyloading
  {
    path: 'notauthorize',
    component: NotAuthorizedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


//Router Auth Guard
//1. CanActivte
//2. CanDeactivate
//3. Canload
//4. Resolve




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: CustompreloadstartegyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
