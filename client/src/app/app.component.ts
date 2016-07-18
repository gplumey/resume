import { Component , ViewEncapsulation} from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CvComponent } from './+cv/';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    
    directives: [CvComponent, ROUTER_DIRECTIVES],
    encapsulation:ViewEncapsulation.None
})

export class AppComponent {
    title = 'Curriculum vitae';
    
    constructor(private _router:Router, private _title:Title){
        this._title.setTitle(this.title);
    }
}
