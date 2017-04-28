import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/events.service';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
    event: any;
    constructor(private eventService: EventService,
                private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']); // + indicated we are passing in id as a number
    }
}