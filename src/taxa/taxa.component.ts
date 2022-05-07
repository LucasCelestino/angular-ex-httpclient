import { Component, OnInit } from '@angular/core';
import { BitcoinBRLService } from './bitcoin-brl.service';

@Component({
  selector: 'app-taxa',
  templateUrl: './taxa.component.html',
  styleUrls: ['./taxa.component.css'],
})
export class TaxaComponent implements OnInit {
  constructor(public bitcoinBRLService: BitcoinBRLService) {}

  ngOnInit() {
    this.bitcoinBRLService.update();
  }

  updatebitcoinBRLTaxas() {
    this.bitcoinBRLService.update();
  }
}
