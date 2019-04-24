import { Note } from './../Note';
import { Component, EventEmitter, OnInit, Input, OnChanges, DoCheck, Output } from '@angular/core';
import { NoteServicesService } from '../note-services.service';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit,OnChanges, DoCheck {

  private _id: string = "";
  private title: string;
  private body: string;
  private starred: boolean;

  @Input()
  note: Note;

  @Input()
  id: string;

  @Output()
  showEdit = new EventEmitter<boolean>();

  constructor(
    private noteServices: NoteServicesService,
  ) {
    this.setDefaultValues();
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.note != null){
      this.setValues();
    }
  }

  ngDoCheck(): void { }

  isShow: boolean = false

  toggleNotification(): void{
    this.isShow = !this.isShow
  }

  setDefaultValues(): void{
    this.title = "";
    this.body = "";
    this.starred = false;
  }

  setValues(): void{
    if(this.note != null){
      this.title = this.note.title;
      this.body = this.note.body;
      this.starred = this.note.starred;
      }
  }

  yesStarred(): void{
    this.starred = true;
  }

  notStarred(): void{
    this.starred = false;
  }

  updateNote(): void{

    let id: string;
    
    if(this.note.id == "" || this.note.id == null){
      id = this.id;
    }else{
      id = this.note.id;
    }

    if(this.title == "" || this.body == ""){
      this.isShow = true;
    }
    else{
      let date = new Date();

      let newNote: Note = {
        dateTime: date,
        title: this.title,
        body: this.body,
        starred: this.starred
      }
      this.noteServices.updateNote(id, newNote);
      
      this.showEdit.emit(false);
      this.isShow = false;
      this.title="";
      this.body="";
      this.starred = false;
    }
  }


}
