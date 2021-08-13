import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input()
  MySkill = new Array;
  constructor(private skillService: SkillService) {
    this.MySkill = this.skillService.mySkill();
  }

  ngOnInit(): void {
  }

}
