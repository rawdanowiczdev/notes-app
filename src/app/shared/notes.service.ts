import { Injectable } from '@angular/core';
import { Note } from "./note"

@Injectable({ providedIn: 'root' })
export class NotesService {
  notes: Note[] = [];

  getNotes(): Note[] {
    return this.notes;
  }
}