import { Component, OnInit } from '@angular/core';
import { ProtfolioService } from '../protfolio.service';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent implements OnInit {

  myProtfo = new Array;
  constructor(private protfolio: ProtfolioService) {
    this.myProtfo = this.protfolio.myprotfo();
   }

  ngOnInit(): void {
  }

}
