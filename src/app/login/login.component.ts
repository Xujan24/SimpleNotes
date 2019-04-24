import { IndexComponent } from './../index/index.component';
import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string = "";
  private password: string = "";
  constructor(
    private fireAuthService: FirebaseAuthService,
    private index: IndexComponent
  ) { }

  ngOnInit() {
  }
  isShow: boolean = false;

  login(): void{
    this.fireAuthService.login(this.username, this.password);
    this.username = "";
    this.password = "";
    this.index.showLogin = false;
  }

}
