import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Mission} from '../../model/mission.interface';
import {Company} from '../../model/company.interface';

@Component({
  moduleId: module.id,
  selector: 'mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [MD_BUTTON_DIRECTIVES]
})
export class MissionComponent implements OnInit {
  @Input() public mission: Mission;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public gotoCompanyDetail(companyId: number) {
    //[routerLink]="['/company', {id: mission.companyId}]"

    let link = ['/company', companyId];
    this._router.navigate(link);
  }
}
