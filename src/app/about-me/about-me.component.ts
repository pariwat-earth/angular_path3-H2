import { Component, Input, OnInit } from '@angular/core';
import { AboutMeService } from '../about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input()
  myEarth = new Array;
  constructor(private aboutmeService: AboutMeService) {
    this.myEarth = this.aboutmeService.getdataAboutMe();
   }
  ngOnInit(): void {
  }
}
