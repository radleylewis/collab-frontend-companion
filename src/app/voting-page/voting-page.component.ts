import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoterService } from "../voter.service";


@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.css']
})
export class VotingPageComponent implements OnInit, OnDestroy {


  jwt: String = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhhbnMiLCJpYXQiOjE1NDgxNzY0NDIsImV4cCI6MTU0ODI2Mjg0Mn0.IybLwo5hnK5iwOpFdfIFZXlQehGw_CXfn0ziVRCHHME";
  publicKey: String;
  private sub: any;

  constructor(private route:ActivatedRoute, private vs: VoterService) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.publicKey = params['publicKey']
    });
    this.vs.pendingOpsSpecific(this.jwt, this.publicKey)
    .subscribe(data => console.log('this is the specific wallet data', data));
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
<<<<<<< HEAD
=======



>>>>>>> 32545692e5e0226abb2e46f710e111ac5308b997
