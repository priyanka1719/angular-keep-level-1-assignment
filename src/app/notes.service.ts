import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) {
    console.log("Note Service Constructor")
  }

  getNotes(): Observable<Array<Note>> {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes');
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Array<Note>>('http://localhost:3000/notes', note)
  }

}
