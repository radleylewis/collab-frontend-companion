import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletsPageComponent } from './wallets-page/wallets-page.component';
import { VotingPageComponent } from './voting-page/voting-page.component';

import { GetWalletsService } from './get-wallets.service';

@NgModule({
  declarations: [
    AppComponent,
    WalletsPageComponent,
    VotingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    GetWalletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
