import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from '../cliente/cliente.component';
import { LocalizarCliente } from '../localizar-cliente';
import { ServicoService } from '../servico.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ClienteComponent,
    RouterLink
  ],
  template: `
  <section class='main-section'>
    <form>
      <input type='text' placeholder='Entrar com Cliente'>
      <button class='primary' type='button'>Buscar</button>&nbsp;&nbsp;&nbsp;

      <a [routerLink]="['/cliente-novo']" routerLinkActive="active" >Cliente novo</a>

    </form>
  </section>
  <section class='detail-section'>
    <ul>
      <li>
    <app-cliente
      *ngFor="let localizarCliente of localizarClienteList"
      [localizarCliente]='localizarCliente'><br />
    </app-cliente>
      </li>
    </ul>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

  localizarClienteList: LocalizarCliente[] = [];
  servicoService: ServicoService = inject(ServicoService);

  constructor() {
    this.localizarClienteList = this.servicoService.getAllLocalizarClientes();
  }

}


