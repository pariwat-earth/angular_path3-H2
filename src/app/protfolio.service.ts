import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProtfolioService {

  constructor() { }

  myprotfo(){
    return[
      "POS",
      "ติดตามตำแหน่งรถตู้",
      "จองตั๋วรถ",
      "กล่องแยกสีลูกปัด"
    ];
  }
}
