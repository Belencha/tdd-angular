import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$;

  constructor() { }

  ngOnInit() {
    this.events$ = of([
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
