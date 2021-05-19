import { Component, Input, OnInit } from '@angular/core';
import {Pcr} from '../pcr.model';

@Component({
  selector: 'app-pcr-element',
  templateUrl: './pcr-element.component.html',
  styleUrls: ['./pcr-element.component.scss'],
})
export class PcrElementComponent implements OnInit {
  @Input() pcr: Pcr={id: 'a3',jmbg: 12353,phone: 49234014,city: 'Beograd',result: 'none'};

  constructor() { }

  ngOnInit() {}

}
