import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ms: number;

  constructor(
    public bitCoinService: BitcoinService,
    public temporizador: TemporizadorService
  ) {}

  ngOnInit() {
    this.bitCoinService.update();
  }

  updateBitcoinRates() {
    this.bitCoinService.update();
  }

  startTemporizador() {
    this.temporizador.start(this.ms);
  }

  stopTemporizador() {
    this.temporizador.stop();
  }

  resetTemporizador() {
    this.temporizador.reset();
  }
}
