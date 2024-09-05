import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        conteudo: ['Formulario reativo'],
        autoria: ['Angular'],
        modelo: ['modelo1']
      })
  }

  criarPensamento(){
    this.service.criar(this.formulario.value).subscribe(() => this.router.navigate(['/lista-pensamentos']));
  }

  cancelarPensamento(){
    this.router.navigate(['/lista-pensamentos']);
  }
}
