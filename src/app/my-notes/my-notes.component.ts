import { FirebaseAuthService } from './../firebase-auth.service';
import { Note } from './../Note';
import { NoteServicesService } from './../note-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.css']
})
export class MyNotesComponent implements OnInit {

  constructor(
    private noteServices: NoteServicesService,
    private fireAuthService: FirebaseAuthService
  ) { }

  ngOnInit() {
    this.getAllNotes();
    this.getImportantNotes();
  }

  private activeStarred: boolean = true;
  private hideAllNotes: boolean = true;
  private hideImportantNotes: boolean = false;
  private selectedNote: Note;

  showEdit: boolean = false;


  notes: Note[]
  importantNotes: Note[]

  getAllNotes(): void{
    this.noteServices.getAllNotes().subscribe(Notes => this.notes = Notes);
  }

  getImportantNotes(): void{
    this.noteServices.getStarredNotes().subscribe(notes => this.importantNotes = notes);
  }

  toggleStar(id: string, note: Note): void{
    const starred: boolean = !note.starred;
    this.noteServices.updateNote(id, note, starred );
  }

  deleteNote(id: string): void{
    this.noteServices.deleteNote(id);
  }

  importantNotesClick(): void{
    this.activeStarred = true;
    this.hideAllNotes = true;
    this.hideImportantNotes = false;
  }

  allNotesClick(): void{
    this.activeStarred = false;
    this.hideAllNotes = false;
    this.hideImportantNotes = true;
  }

  toggleEditNote(note: Note): void{
    this.selectedNote = note;
    this.showEdit = !this.showEdit;
  }

  closeEdit(flag: boolean){
    this.showEdit = flag;
  }

}
