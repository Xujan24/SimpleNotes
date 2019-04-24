import { Note } from './Note';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteServicesService {
  private notes: Observable<Note[]>
  private starredNotes: Observable<Note[]>

  constructor(
    private afs: AngularFirestore
  ) {
  }


  getAllNotes(): Observable<Note[]>{
    this.notes = this.afs.collection('notes', ref => ref.orderBy('dateTime', 'desc')).snapshotChanges().pipe(
      map(notes => {
        return notes.map( note => {
          const data = note.payload.doc.data() as Note;
          const id = note.payload.doc.id;
          return {id, ...data};
        })
      })
    );
    return this.notes;
  }

  getStarredNotes(): Observable<Note[]>{
    this.starredNotes = this.afs.collection('notes', ref => ref.where('starred', '==', true).orderBy('dateTime', 'desc')).snapshotChanges().pipe(
      map(notes => {
        return notes.map( note => {
          const data = note.payload.doc.data() as Note;
          const id = note.payload.doc.id;
          return {id, ...data}
        })
      })
    )

    return this.starredNotes
  }

  addNewNote(note: Note): void{
    this.afs.collection('notes').add(note);
  }

  deleteNote(id: string): void{
    this.afs.collection('notes').doc<Note>(id).delete();
  }

  updateNote(id: string, note: Note, star?: boolean): void{
    let starred: boolean;
    if(star != null){
      starred = star;
    }else{
      starred = note.starred
    }
    const changedNote: Note = {
      dateTime : note.dateTime,
      title : note.title,
      body: note.body,
      starred: starred
    }
    this.afs.collection('notes').doc<Note>(id).set(changedNote)
  }

  getSingleNote(id: string): Observable<Note>{
    if(id != "" && id != null){

      return this.afs.collection('notes').doc<Note>(id).valueChanges();

    }
  }
}
