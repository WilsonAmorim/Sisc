import { Injectable } from '@angular/core';
import { LocalizarCliente } from './localizar-cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  url = 'http://localhost:3000/locations';

  async getAllLocalizarClientes(): Promise<LocalizarCliente[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getLocalizarClienteById(id: number): Promise<LocalizarCliente | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(nome: string, cpfCnpj: string, celular: string, email: string) {
    console.log(nome, cpfCnpj, celular, email);
  }

}
