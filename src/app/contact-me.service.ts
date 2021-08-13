import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor() { }

  myContact(){
    return[
      "e-mail: pariwat.paiwong@gmail.com",
      "Tel.:062....",
      "Line: Earthboy415"
    ];
  }
}
