import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { Company } from '../model/company.interface';
import { CompanyService } from '../services/company.service';

@Component({
    moduleId: module.id,
    selector: 'company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
    company: Company;
    private _id: number;
    sub: any;

    constructor(
        private _companyService: CompanyService,
        private _router: Router,
        private route: ActivatedRoute,
        private _title: Title) {


    }


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            //   this.heroService.getHero(id)
            //     .then(hero => this.hero = hero);
            this.company = this._companyService.getCompany(id);
            this._title.setTitle(this.company.name);
        });

    }


    public return() {
        this._router.navigate(['/']);
    }

}
