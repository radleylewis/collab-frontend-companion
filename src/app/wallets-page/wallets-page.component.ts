import { Component, OnInit } from "@angular/core";
import { GetWalletsService } from "../get-wallets.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { State } from "../app.reducer";
import { VoterService } from "../voter.service";

@Component({
  selector: "app-wallets-page",
  templateUrl: "./wallets-page.component.html",
  styleUrls: ["./wallets-page.component.css"]
})
export class WalletsPageComponent implements OnInit {
  jwt: string;
  walletHolder: any;
  pendingOpsList: Object[];
  opHolder: any;
  loaded: any;
  voted: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private gws: GetWalletsService,
    private vs: VoterService,
    private router: Router,
    private store: Store<State>
  ) {
    store.select("app/jwt").subscribe(jwt => console.log("this is jwt", jwt));
  }

  ngOnInit() {
    this.renderWalletStanding();
  };

  renderWalletStanding() {
    this.sub = this.route.params.subscribe(params => {
      this.jwt = params["jwt"];
      this.gws.getWallets(this.jwt).subscribe(walletsData => {
        this.walletHolder = walletsData;
        this.vs.pendingOpsAll(this.jwt).subscribe(pendOps => {
          this.opHolder = pendOps;
          this.pendingOpsList = this.opHolder.operations.filter(operation => {
            if (operation.votingState === 0) return operation.publicKey;
          }).map(operation => operation.publicKey);            
          for (let wallet of this.walletHolder.wallets) {
            this.pendingOpsList.indexOf(wallet.publickey) > -1
              ? (wallet["pendingOps"] = true)
              : (wallet.pendingOps = false);
          }
          this.loaded = true;
          console.log(this.pendingOpsList);
        });
      });
    });
  }


  renderPendingOps(publicKey: String) {
    for (let wallet of this.walletHolder.wallets) {
      if (wallet.publickey === publicKey) {

        this.vs.pendingOpsSpecific(this.jwt, publicKey)    
        .subscribe(data => {
          console.log(data);
          wallet['opDetails'] = data;
          wallet['voteRender'] = true;
        })

      }
    }
  }

  
  vote(publicKey:string, opID:number, valueOfVote:any) {
    this.voted = true;
    const body = {
      publicKey: publicKey,
      valueOfVote: valueOfVote,
      operation_id: opID,
    }
    this.vs.vote(this.jwt, body)
    .subscribe(() => {
      this.renderWalletStanding()
    });

  logOut() {
    this.jwt = '';
    this.walletHolder = [];
    this.pendingOpsList = [];
    this.opHolder = [];
    this.router.navigate((['/login']));
  }

};
