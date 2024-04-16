import { Injectable } from '@angular/core';
import { LocalizarCliente } from './localizar-cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  localizarClienteList: LocalizarCliente[] = [
    {
      'id': 1,
      'cpfCnpj': '24630004572',
      'nome':' Wilson Amorim',
      'endereco': 'Travessa Ibiapaba',
      'bairro': 'Stiep',
      'cep': '41770180',
      'cidade': 'Salvador',
      'uf': 'BA',
      'email': 'wilamsa@gmail.com',
      'celular': '71986827844'
    },
    {
      'id': 2,
      'cpfCnpj': '24630004572',
      'nome':' Wilson Amorim',
      'endereco': 'Travessa Ibiapaba',
      'bairro': 'Stiep',
      'cep': '41770180',
      'cidade': 'Salvador',
      'uf': 'BA',
      'email': 'wilamsa@gmail.com',
      'celular': '71986827844'
    },
    {
      'id': 1,
      'cpfCnpj': '24630004572',
      'nome':' Wilson Amorim',
      'endereco': 'Travessa Ibiapaba',
      'bairro': 'Stiep',
      'cep': '41770180',
      'cidade': 'Salvador',
      'uf': 'BA',
      'email': 'wilamsa@gmail.com',
      'celular': '71986827844'
    }
  ];

  getAllLocalizarClientes(): LocalizarCliente[] {
    return this.localizarClienteList;
  }

  getLocalizarClienteById(id: number): LocalizarCliente | undefined {
    return this.localizarClienteList.find(localizarCliente => localizarCliente.id === id);
  }

  submitApplication(firstName: string, lastName: string, celular: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${celular}, email: ${email}.`);
  }
  constructor() { }
}
