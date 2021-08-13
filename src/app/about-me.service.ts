import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor() { }

  getdataAboutMe(){
    return [
      "My name is Pariwat Paiwong",
      "CTF10969",
      "From Kmutt",
    ];
  }
}
