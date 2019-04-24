import { NoteServicesService } from './../note-services.service';
import { Note } from './../Note';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  private title: string;
  private body: string;
  private isShow: boolean;
  private starred: boolean;

  constructor(
    private noteServices: NoteServicesService,
    private indexComponent: IndexComponent
    ) {
      this.title = "";
      this.body = "";
      this.isShow = false;
      this.starred = false;
    }

  ngOnInit() {
  }

  toggleNotification(): void{
    this.isShow = !this.isShow
  }

  yesStarred(): void{
    this.starred = true;
  }

  notStarred(): void{
    this.starred = false;
  }

  onClickAdd(): void{
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
      this.noteServices.addNewNote(newNote);
      
      this.indexComponent.showNewNote = false;
      this.isShow = false;
      this.title="";
      this.body="";
      this.starred = false;
    }
  } 
}
