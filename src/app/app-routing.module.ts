import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WalletsPageComponent } from './wallets-page/wallets-page.component';
import { VotingPageComponent } from './voting-page/voting-page.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
  { path: "login", component: LoginComponent },
  { path: 'wallets', component: WalletsPageComponent },
  { path: 'vote', component: VotingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
