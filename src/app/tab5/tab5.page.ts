import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  scannedCode=null;

  ngOnInit() {
  }

  constructor(private scanner: BarcodeScanner) {
  }

  scanCode(){
    this.scanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    })
  }

}
