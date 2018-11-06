import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;

  constructor(private tokenServie: TokenService, private router: Router) {}

  ngOnInit() {
    this.user = this.tokenServie.GetPayload();
    //test debug
    // console.log(this.user.username);
  }

  //logout method for when user clicks assigned button, deletes token on signout
  logout() {
    this.tokenServie.DeleteToken();
    this.router.navigate(['']);
  }

  GoToHome() {
    this.router.navigate(['streams']);
  }
}
