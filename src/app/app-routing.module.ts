import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'tabs-slide',
    loadChildren: './pages/tabs-slide/tabs-slide.module#TabsSlidePageModule'
  },
  {
    path: 'expandable-header',
    loadChildren: './pages/expandable-header/expandable-header.module#ExpandableHeaderPageModule'
  },
  {
    path: 'expandable-image-header',
    loadChildren: './pages/expandable-image-header/expandable-image-header.module#ExpandableImageHeaderPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
