import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HorsesComponent } from './components/horses/horses.component';
import { TableComponent } from './components/table/table.component';
import { DetailsUserComponent } from './components/table/details-user/details-user.component';
import { usersResolver } from './services/table/users.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-jack', component: BlackJackComponent },
  { path: 'horses', component: HorsesComponent },
  { path: 'table', component: TableComponent },
  {
    path: 'table/:id',
    component: DetailsUserComponent,
    resolve: { data: usersResolver },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
