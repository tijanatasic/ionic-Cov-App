import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vaccine } from '../vaccine.model';

@Component({
  selector: 'app-vaccine-element',
  templateUrl: './vaccine-element.component.html',
  styleUrls: ['./vaccine-element.component.scss'],
})
export class VaccineElementComponent implements OnInit {

  @Input() vaccine: Vaccine={id: 'a3',jmbg: 12353,phone: 49234014,vaccine: 'Zeneca', dose: 'none'};

  constructor() { }

  ngOnInit() {}

  changeData(value: string){
    this.vaccine.dose=value;
  }
}
