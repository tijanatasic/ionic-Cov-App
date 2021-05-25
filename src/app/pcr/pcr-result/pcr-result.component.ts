import { Component, Input, OnInit } from '@angular/core';
import { Pcr } from '../pcr.model';
import { PcrService } from '../pcr.service';

@Component({
  selector: 'app-pcr-result',
  templateUrl: './pcr-result.component.html',
  styleUrls: ['./pcr-result.component.scss'],
})
export class PcrResultComponent implements OnInit {

  @Input() public element=this.pcrService.resultUser;

  constructor(private pcrService: PcrService) { }

  ngOnInit() {
  }

}
