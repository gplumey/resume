// Angular
import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable }     from 'rxjs/Observable';
//Material design
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES  } from '@angular2-material/input';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox'

import {SkillComponent} from '../components/skill';
import {CvService} from '../services/cv.service';
import { Skill } from '../model/skill.interface';
import { Mail } from '../model/mail';



@Component({
    moduleId: module.id,
    selector: 'sendmail',
    templateUrl: 'sendmail.component.html',
    styleUrls: ['sendmail.component.css'],
    directives: [SkillComponent,
        MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES],
    providers: [CvService],
    viewProviders: [MdIconRegistry]
})
export class SendmailComponent implements OnInit {
    skills: Skill[];

    //mail: CommonMail = new CommonMail("coucou", "helle");

    constructor(
        private _title: Title,
        private _router: Router,
        private _cvService: CvService,
        private _http: Http) {


    }

    ngOnInit() {
        this.skills = this._cvService.getSkills(0);
        console.log(this.skills);
    }

    public send() {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
         headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
      //  console.log(this.mail);
      //  let s_Mail = JSON.stringify(this.mail);
      //  console.log(s_Mail);
      //  var path = "http://localhost:3000" + '/mail';
      //  this._http.post(path, s_Mail, { headers: headers })
      //  .subscribe();
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    public return() {
        this._router.navigate(['/']);
    }

}
