import { Component, OnInit } from "@angular/core";
import { GetWalletsService } from "../get-wallets.service";
import { Router, ActivatedRoute } from '@angular/router';
import { VoterService } from "../voter.service";

@Component({
  selector: "app-wallets-page",
  templateUrl: "./wallets-page.component.html",
  styleUrls: ["./wallets-page.component.css"]
})
export class WalletsPageComponent implements OnInit {
  jwt: String =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhbnMiLCJpYXQiOjE1NDgwODk4NTksImV4cCI6MTU0ODE3NjI1OX0.dryydcwrZf2V1TNN14mPtXtJ8zgTeGMw0TwBUyGDCic";
  walletData: any;

  constructor(
    private route:ActivatedRoute, 
    private gws: GetWalletsService, 
    private vs: VoterService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.gws.getWallets(this.jwt)    
    .subscribe(data => { 
      this.walletData = data; 
    });
  }

  voter(data:any) {
    this.vs.votePageDeets(data);
    this.router.navigate(['/vote']);
  }
}
