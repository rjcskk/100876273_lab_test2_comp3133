import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';
import { MissionListComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  { path: 'missions', component: MissionListComponent, standalone: true },
  { path: 'mission/:id', component: MissionDetailsComponent, standalone: true }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
