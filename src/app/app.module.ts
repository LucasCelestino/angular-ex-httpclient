import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TaxaComponent } from '../taxa/taxa.component';
import { HomeComponent } from '../home/home.component';
import { BitcoinService } from '../home/bitcoin.service';
import { BitcoinBRLService } from '../taxa/bitcoin-brl.service';
import { TemporizadorService } from '../home/temporizador.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'taxa', component: TaxaComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, TaxaComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService, BitcoinBRLService, TemporizadorService],
})
export class AppModule {}
