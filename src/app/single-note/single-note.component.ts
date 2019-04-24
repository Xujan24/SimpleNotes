import { FirebaseAuthService } from './../firebase-auth.service';
import { NoteServicesService } from './../note-services.service';
import { Note } from './../Note';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit, OnDestroy{

  public showEdit: boolean = false;
  private id: string = "";

  constructor(
    private noteServices: NoteServicesService,
    private router: ActivatedRoute,
    private fireAuth: FirebaseAuthService
    ) {
      this.getNote();
    }

  private selectedNote: Note;

  ngOnInit() { console.log("onInit")}

  ngOnDestroy(){ console.log("onDestroy") }

  getNote(): void{
    this.id = this.router.snapshot.paramMap.get('id');
    let noteObsrvable = this.noteServices.getSingleNote(this.id);
    if(noteObsrvable != null){
      noteObsrvable.subscribe(note => this.selectedNote = note);
    }
  }

  toggleEditNote(): void{
    this.showEdit = !this.showEdit;
  }

  closeEdit(flag: boolean): void{
    this.showEdit = flag;
  }
}
