import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoterService } from "../voter.service";


@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.css']
})
export class VotingPageComponent implements OnInit {

  operationID:any;
  publicKey:any;
  vote:any;

  constructor(private route:ActivatedRoute, private vs: VoterService) { }

  ngOnInit() {
  }

  vote(operationID, publicKey, vote) {
    const body = {
      operation_id: operationID,
      publicKey: publicKey,
      valueOfVote: vote,
    }
    this.vs.vote(body)    
    .subscribe(data => { console.log(data);});
  }


}
