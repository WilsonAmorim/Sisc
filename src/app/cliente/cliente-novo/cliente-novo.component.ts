import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicoService } from '../../servico.service';
import { LocalizarCliente } from '../../localizar-cliente';

@Component({
  selector: 'app-cliente-novo',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `<article>
        <section class="listing-apply">
      <h2 class="section-heading">Informe os Dados do Cliente</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">CPF/CNPJ</label>
        <input id="first-name" type="text" formControlName="cpfcnpj">

        <label for="last-name">Nome</label>
        <input id="last-name" type="text" formControlName="nome">

        <label for="email">Celular</label>
        <input id="email" type="text" formControlName="celuar">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Salvar</button>
      </form>
    </section>
</article>`,
  styleUrl: './cliente-novo.component.css'
})
export class ClienteNovoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  servicoService = inject(ServicoService);
  localizarCliente: LocalizarCliente | undefined;


  applyForm = new FormGroup({
    cpfcnpj: new FormControl(''),
    nome: new FormControl(''),
    celuar: new FormControl(''),
    email: new FormControl('')
  });

  submitApplication() {
    this.servicoService.submitApplication(
      this.applyForm.value.cpfcnpj ?? '',
      this.applyForm.value.nome ?? '',
      this.applyForm.value.celuar ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
