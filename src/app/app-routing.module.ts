import { SingleNoteComponent } from './single-note/single-note.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo: '/notes', pathMatch: 'full'},
  {path: 'notes', component: MyNotesComponent},
  {path: 'notes/:id', component: SingleNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
