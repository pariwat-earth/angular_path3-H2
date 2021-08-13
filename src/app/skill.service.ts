import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  mySkill(){
    return [
      "HTML",
      "CSS",
      "Js",
      "TSC",
      "Dart",
      "VB.NET"
    ];
  }
}
