import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <div style="margin-top:30px">
      <h2>{{event?.name}}</h2>
    </div>
    <div>
      Date:{{event?.date}}
    </div>
    <div [ngStyle]="startEarly()">
      Time:{{event?.time}}
    </div>
    <div [ngSwitch]="startEarly()">
    <span *ngSwitchCase="'8:00 am'">Early start</span>
    <span *ngSwitchCase="'10:00 am'">Late  start</span>
    <span *ngSwitchDefault>Normal start</span>
    </div>
    <div *ngIf="event?.location">
      Address:{{event?.location?.address}}
      </div>
      <div *ngIf="event?.OnlineUrl">
      OnlineUrl:{{event?.OnlineUrl}}
      </div>
     </div>`,
     styles:[`
       .green { color:green !important; }
       .bold { font-weight:bold; }
       `]
})
export class EventThumbnailComponent  {
       @Input() event:any

       startEarly():any{
         if(this.event && this.event.time==='8:00 am')
         return {color:'green','font-weight':'bold'};
         return {}
       }
       
}