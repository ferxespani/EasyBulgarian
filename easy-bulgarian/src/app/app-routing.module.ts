import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { OnlineCoursesComponent } from './components/online-courses/online-courses.component';
import { SpeakingClubsComponent } from './components/speaking-clubs/speaking-clubs.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'online-courses', component: OnlineCoursesComponent },
  { path: 'speaking-clubs', component: SpeakingClubsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
