import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WalletsPageComponent } from "./wallets-page/wallets-page.component";
import { VotingPageComponent } from "./voting-page/voting-page.component";
import { LoginComponent } from "./login/login.component";
import { AppReducer } from "./app.reducer";

import { GetWalletsService } from "./get-wallets.service";
import {LoginService} from './login-service.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WalletsPageComponent,
    VotingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    StoreModule.forRoot({ app: AppReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [GetWalletsService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
