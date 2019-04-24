import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { TruncatePipe } from './truncate.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreDatePipe } from './firestore-date.pipe';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SingleNoteComponent } from './single-note/single-note.component';
import { CleanurlPipe } from './cleanurl.pipe';
import { EditNotesComponent } from './edit-notes/edit-notes.component';


@NgModule({
  declarations: [
  IndexComponent,
  MyNotesComponent,
  AddNotesComponent,
  TruncatePipe,
  FirestoreDatePipe,
  LoginComponent,
  SingleNoteComponent,
  CleanurlPipe,
  EditNotesComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  providers: [TruncatePipe],
  bootstrap: [IndexComponent]
})
export class AppModule { }
