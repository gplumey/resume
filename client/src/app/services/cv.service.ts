import { Injectable } from '@angular/core';
import {CurriculumVitae} from '../model/curriculumvitae.interface';
import {Skill} from '../model/skill.interface';
import {CV, SKILLS_SECTION} from './cv.mock.fr';
import {CV_EN} from './cv.mock.en';

@Injectable()
export class CvService {
  private _cv: CurriculumVitae;
  private _cvs: Map<String, CurriculumVitae>= new Map<String, CurriculumVitae>();

  constructor() {
    this._cvs.set("fr", CV);
    this._cvs.set("en", CV_EN);
  }


  public read(locale: string): CurriculumVitae {
    if(locale === undefined || locale == null || locale==""){
      locale = "fr";
    }
    return this._cvs.get(locale);
  }


  public getSkills(id: number): Skill[] {
    let skills: Skill[] = [];
    SKILLS_SECTION.forEach((section: any) => {
      section.items.forEach((skill: Skill) => {
        skills.push(skill)
      });
    });
    return skills;
  }


}

