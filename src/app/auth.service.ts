// import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private storage: Storage) {}

//   async registerUser(cpf: string, password: string) {
//     // Verifique se o CPF já está cadastrado
//     const isRegistered = await this.checkIfCPFExists(cpf);

//     if (!isRegistered) {
//       // Armazene o CPF e a senha localmente
//       await this.storage.set(cpf, password);
//       return true; // Cadastro bem-sucedido
//     }

//     return false; // CPF já existe
//   }

//   async loginUser(cpf: string, password: string) {
//     // Verifique se o CPF e a senha correspondem aos armazenados localmente
//     const storedPassword = await this.storage.get(cpf);

//     if (storedPassword === password) {
//       return true; // Login bem-sucedido
//     }

//     return false; // CPF ou senha incorretos
//   }

//   private async checkIfCPFExists(cpf: string) {
//     // Verifique se o CPF já está cadastrado localmente
//     const storedPassword = await this.storage.get(cpf);
//     return !!storedPassword;
//   }
// }
