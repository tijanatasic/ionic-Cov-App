import { Component, Input, OnInit } from '@angular/core';
import { VaccineNumber } from '../vaccine-number.model';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {

  @Input() vaccineNum: VaccineNumber={id:'d',pfizer: 1,sputnik: 2,sinopharm: 3,astra: 4,moderna:6};

  constructor() { }

  ngOnInit() {}

}
