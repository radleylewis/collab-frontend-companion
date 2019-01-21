import { Component, OnInit } from "@angular/core";
import { GetWalletsService } from "../get-wallets.service";

@Component({
  selector: "app-wallets-page",
  templateUrl: "./wallets-page.component.html",
  styleUrls: ["./wallets-page.component.css"]
})
export class WalletsPageComponent implements OnInit {
  constructor(private GetWalletsService: GetWalletsService) {}

  walletData:any;

  ngOnInit() {
    this.walletData = this.GetWalletsService.getWallets();    
  }
}
