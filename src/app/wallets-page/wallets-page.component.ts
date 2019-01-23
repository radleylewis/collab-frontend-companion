import { Component, OnInit } from "@angular/core";
import { GetWalletsService } from "../get-wallets.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import {State} from '../app.reducer';
import { VoterService } from "../voter.service";


@Component({
  selector: "app-wallets-page",
  templateUrl: "./wallets-page.component.html",
  styleUrls: ["./wallets-page.component.css"]
})
export class WalletsPageComponent implements OnInit {

  jwt: String =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhbnMiLCJpYXQiOjE1NDgwODk4NTksImV4cCI6MTU0ODE3NjI1OX0.dryydcwrZf2V1TNN14mPtXtJ8zgTeGMw0TwBUyGDCic";
  // jwt: String = "";
  walletData: any;

  constructor(
    private route: ActivatedRoute,
    private gws: GetWalletsService,
    private vs: VoterService,
    private router: Router,
    private store: Store<State>
  ) {
    store.select('app/jwt').subscribe(jwt => console.log('this is jwt', jwt));
  }

  ngOnInit() {
    this.gws.getWallets(this.jwt).subscribe(data => {
      this.walletData = data;
    });

    // this.jwt = (store: Store<State>): State => {
    //   let state: State;
    //   store.
    // }
  }

  voter(data: any) {
    this.vs.votePageDeets(data);
    this.router.navigate(["/vote"]);
  }
}
