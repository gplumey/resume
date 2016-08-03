/// <reference path="jspdf.d.ts" />
import { Component, OnInit, ElementRef,
    trigger,
    state,
    style,
    transition,
    animate} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';

import {CurriculumVitae} from '../model/curriculumvitae.interface';
import {AddressComponent} from '../components/address/';
import {SectionComponent} from './section/';
import {AgeComponent} from './age/';
import {SkillComponent} from '../components/skill';
import {MissionComponent} from './mission';
import {SubsectionComponent} from './subsection';
import {CompanyService } from '../services/company.service';
import {CvService } from '../services/cv.service';


@Component({
    moduleId: module.id,
    selector: 'cv',
    templateUrl: 'cv.component.html',
    styleUrls: ['cv.component.css'],
    directives: [AddressComponent, SectionComponent, AgeComponent,
        SkillComponent, MissionComponent, SubsectionComponent],
    providers: [CompanyService, CvService],
   
})
export class CvComponent implements OnInit {


    public cv: CurriculumVitae;
    private sub: any;
    public locale: string;
   
    public contactMap: { [key: string]: string } = {
        'fr': 'Me contacter',
        'en': 'Contact me'
    };

    constructor(
        private _cvService: CvService,
        private _title: Title,
        private _router: Router,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.locale = params['locale'] || "fr";
            this.cv = this._cvService.read(this.locale);
            this._title.setTitle("CV " + this.cv.firstName + " " + this.cv.lastName);
        });
 
    }


    public changeLocale(locale: string) {
        this._router.navigate([locale]);
    }



}
