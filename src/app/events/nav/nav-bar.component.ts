import { Component } from '@angular/core';
import { AuthService } from '../../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'nav-bar.component.html',
    styles:[`
    .nav.navbar-nav { font-size:15px; },
    #searchForm {margin-right:100px},
    @media(max-width:1200px) { #searchForm {display:none} },
    .nav > li > a.active { color: orange; !important}
    `]
})
export class NavBarComponent {
constructor(private authservice:AuthService){}
   

}