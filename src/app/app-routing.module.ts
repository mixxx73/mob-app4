import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'venues', loadChildren: './venues/venues.module#VenuesPageModule' },
  { path: 'venue-single', loadChildren: './venue-single/venue-single.module#VenueSinglePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
