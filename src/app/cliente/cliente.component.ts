import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizarCliente } from '../localizar-cliente';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  template: `
  <section class="listing-location">
  <a [routerLink]="['/details', localizarCliente.id]" routerLinkActive="active">
   {{ localizarCliente.cpfCnpj }} - {{ localizarCliente.nome}} - {{localizarCliente.celular }}
   </a>
  </section>
  `,
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  @Input() localizarCliente!: LocalizarCliente;



}
