import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tabs-slide', loadChildren: './pages/tabs-slide/tabs-slide.module#TabsSlidePageModule' },
  { path: 'expandable-header', loadChildren: './pages/expandable-header/expandable-header.module#ExpandableHeaderPageModule' },
  { path: 'expandable-custom-header', loadChildren: './pages/expandable-custom-header/expandable-custom-header.module#ExpandableCustomHeaderPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
