import { Component, Input, OnInit } from '@angular/core';
import { Pcr } from '../pcr.model';

@Component({
  selector: 'app-pcr-result',
  templateUrl: './pcr-result.component.html',
  styleUrls: ['./pcr-result.component.scss'],
})
export class PcrResultComponent implements OnInit {

  @Input() pcr: Pcr;


  constructor() { }

  ngOnInit() {
  }

}
