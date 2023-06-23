import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  public login = "";
  public password = "";
  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  validaLogin(){
    if(this.login == 'zanin' && this.password == '123') {
    this.nav.navigateForward('/home'); }  //aqui quando logar manda para essa página
    else {
    this.nav.navigateForward('/login'); }
    console.log(this.login); console.log(this.password)
    }

}
