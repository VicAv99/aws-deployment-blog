import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomComponent } from '@workspace/random';
import { SearchComponent } from '@workspace/search';

const routes: Routes = [
  { path: '', redirectTo: '/random', pathMatch: 'full' },
  { path: 'random', component: RandomComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/random', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
