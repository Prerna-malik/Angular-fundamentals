import { Component, Input } from '@angular/core';
//import { EventsListComponent } from './events-list.component';
@Component({
    selector: 'address-details',
    template: `
    Address: {{action.location.address}},
    {{action.location.city}},
    {{action.location.country}}
   `
})
export class AddressDetailsComponent {

    @Input() action:any
    

}