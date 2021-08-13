import { Component, Input, OnInit } from '@angular/core';
import { ContactMeService } from '../contact-me.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  @Input()
  MyContact = new Array;
  constructor(private contact: ContactMeService) {
    this.MyContact = this.contact.myContact();
  }

  ngOnInit(): void {
  }

}
