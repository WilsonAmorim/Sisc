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
      <input type="text" placeholder="Entrar com Nome do Cliente" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>&nbsp;&nbsp;&nbsp;

      <a [routerLink]="['/cliente-novo']" routerLinkActive="active" >Cliente novo</a>

    </form>
  </section>
  <section class='detail-section'>
    <ul>
      <li>
    <app-cliente
      *ngFor="let localizarCliente of filteredLocalizacaoList"
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
  filteredLocalizacaoList: LocalizarCliente[] = [];

  constructor() {
    this.servicoService.getAllLocalizarClientes().then((localizarClienteList: LocalizarCliente[]) => {
      this.localizarClienteList = localizarClienteList;
      this.filteredLocalizacaoList = localizarClienteList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocalizacaoList = this.localizarClienteList;
      return;
    }

    this.filteredLocalizacaoList = this.localizarClienteList.filter(
      localizarCliente => localizarCliente?.nome.toLowerCase().includes(text.toLowerCase())
    );
  }

}


