import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletsPageComponent } from './wallets-page/wallets-page.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { LoginComponent } from './login/login.component';

import { GetWalletsService } from './get-wallets.service';

@NgModule({
  declarations: [
    AppComponent,
    WalletsPageComponent,
    VotingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [
    GetWalletsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}