import { Component, OnInit, Input } from '@angular/core';
import {I18nSelectPipe} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'age',
  templateUrl: 'age.component.html'
})
export class AgeComponent implements OnInit {
  @Input() public birthday: Date;
  @Input() public gender: string;
  @Input() public locale: string = "fr";


  
  birthdayMap: { [key: string]: string } = {
    'male': 'Né le',
    'female': 'Née le'
  };

  private  phrases:Map<String, string> = new Map<string, string> ();
  
  constructor(){
    this.phrases.set("fr", "ans");
    this.phrases.set("en", "years old");
  }

  getYears() {
    var date = new Date();

    let years = date.getFullYear() - this.birthday.getFullYear();
    
    return years + " "+this.phrases.get(this.locale);
  }

  
  ngOnInit() {
  }

}
