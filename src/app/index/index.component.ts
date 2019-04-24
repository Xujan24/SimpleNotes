import { FirebaseAuthService } from './../firebase-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private fireAuthService: FirebaseAuthService) {
  }

  ngOnInit() {
  }

  showNewNote: boolean = false;
  showLogin: boolean = false;

  toggleNewNoteModal(): void{
    this.showNewNote = !this.showNewNote
  }

  toggleLoginModal(): void{
    this.showLogin = !this.showLogin

  }

  logout(): void{
    this.fireAuthService.logout();
  }

}
