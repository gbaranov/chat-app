import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  token: any;

  constructor(private tokenServie: TokenService, private router: Router) {}

  ngOnInit() {
    //asigns and gets token relevant to current user/session

    //new de-encrypted data returned in payload function
    this.token = this.tokenServie.GetPayload();
    //test debug
    console.log(this.token);
  }
}
