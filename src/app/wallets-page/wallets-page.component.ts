import { Component, OnInit } from "@angular/core";
import { GetWalletsService } from "../get-wallets.service";

@Component({
  selector: "app-wallets-page",
  templateUrl: "./wallets-page.component.html",
  styleUrls: ["./wallets-page.component.css"]
})
export class WalletsPageComponent implements OnInit {
  constructor(private GetWalletsService: GetWalletsService) {}

  wallets: String = "";

  ngOnInit() {
    console.log('getting wallets', this.GetWalletsService.wallets);
    this.wallets = this.GetWalletsService.MyData();
  }
}
