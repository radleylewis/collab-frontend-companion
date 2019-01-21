import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
// import { LoginComponent } from './login/login.component'; // exact directory may need to be updated for login page
=======
import { LoginComponent } from './login/login.component'; // exact directory may need to be updated for login page
>>>>>>> 0b436a2b00574d523ffe3933b83f867fb776de17
import { WalletsPageComponent } from './wallets-page/wallets-page.component';
import { VotingPageComponent } from './voting-page/voting-page.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full' },
<<<<<<< HEAD
  // { path: 'login', component: LoginComponent },
=======
  { path: "login", component: LoginComponent },
>>>>>>> 0b436a2b00574d523ffe3933b83f867fb776de17
  { path: 'wallets', component: WalletsPageComponent },
  { path: 'vote', component: VotingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
