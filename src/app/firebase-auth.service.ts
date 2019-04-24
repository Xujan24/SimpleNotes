import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  private user: User;

  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        localStorage.setItem('user', null);
      }
    })
  }

  get isLoggedIn(): boolean{
    const user = JSON.parse(localStorage.getItem('user'))
    return user !== null;
  }

  async login(email: string, password: string){
    try{
      await this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    } catch(e){
      alert ("Error!" + e.message);
    }
  }

  async logout(){
    await this.fireAuth.auth.signOut();
    localStorage.removeItem('user');
  }
}
