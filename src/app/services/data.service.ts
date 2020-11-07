import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEvents$() {
    return of([
      {
        title: 'Evento 1',
        image: 'assets/event.jpg',
        location: 'Brasil'
      },
      {
        title: 'Evento 2',
        image: 'assets/event.jpg',
        location: 'España'
      },
      {
        title: 'Evento 3',
        image: 'assets/event.jpg',
        location: 'China'
      }
    ]);
  }
}
