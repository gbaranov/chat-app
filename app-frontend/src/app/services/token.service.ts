import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  SetToken(token) {
    this.cookieService.set('chat_token', token);
  }

  GetToken() {
    return this.cookieService.get('chat_token');
  }

  DeleteToken() {
    this.cookieService.delete('chat_token');
  }

  GetPayload() {
    const token = this.GetToken();
    let payload;
    if (token) {
      //split token and get payload at index 1
      payload = token.split('.')[1];
      //de-encrypt payload
      payload = JSON.parse(window.atob(payload));
    }
    //return de-encrypted payload
    return payload.data;
  }
}
