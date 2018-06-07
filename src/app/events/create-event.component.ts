import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { EventService } from '.';
import { EventService} from './shared/index'

@Component({
    
    templateUrl:'./create-event.component.html'
    
    
    
})
export class CreateEventComponent  {
    isDirty:boolean=true
      constructor(private route:Router,private eventService:EventService){}
    cancel(){
        this.route.navigate(['/events'])
    }
   saveEvent(formValues){
 this.eventService.saveEvent(formValues)
 this.route.navigate(['/events'])

  }

}