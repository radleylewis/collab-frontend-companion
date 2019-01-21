import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

// Todo: delete all Routing before merging 1
import { RouterModule, Routes } from "@angular/router";

// Todo: delete appRoutes before merging 2
const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  // Todo: delete RouterModule before merging
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
