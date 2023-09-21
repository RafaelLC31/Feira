import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = ''; // Inicialize aqui
  password: string = ''; // Inicialize aqui

  constructor() {}

  login() {
    // Adicione a lógica de autenticação aqui
    if (this.username === 'usuario' && this.password === 'senha') {
      console.log('Login bem-sucedido');
    } else {
      console.log('Login falhou');
    }
  }
}
