import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicoService } from '../../servico.service';
import { LocalizarCliente } from '../../localizar-cliente';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `<article>
  <section class="listing">
  <table border="1" class="tabela">
  <tr>
    <th>CPF/Cnpj</th>
    <td>{{localizarCliente?.cpfCnpj}}</td>
  </tr>
  <tr>
    <th>nome</th>
    <td>{{localizarCliente?.nome}}</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>{{localizarCliente?.email}}</td>
  </tr>
  <tr>
  <th>Endereço</th>
    <td>{{localizarCliente?.endereco}}</td>
  </tr>
  <tr>
  <th>Bairro</th>
    <td>{{localizarCliente?.bairro}}</td>
  </tr>
  <tr>
  <th>Cidade</th>
    <td>{{localizarCliente?.cep}}</td>
  </tr>
  <tr>
  <th>CEP</th>
    <td>{{localizarCliente?.cidade}}</td>
  </tr>
  <tr>
  <th>Uf</th>
    <td>{{localizarCliente?.uf}}</td>
  </tr>

</table>

  </section>

</article>`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  servicoService = inject(ServicoService);
  localizarCliente: LocalizarCliente | undefined;



  constructor() {
      const localizarClienteId = Number(this.route.snapshot.params['id']);
      this.localizarCliente = this.servicoService.getLocalizarClienteById(localizarClienteId);
  }



}
