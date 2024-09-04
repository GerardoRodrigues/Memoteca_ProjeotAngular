import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent{
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router) {
    
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/lista-pensamentos']));
  }

  cancelarPensamento(){
    this.router.navigate(['/lista-pensamentos']);
  }
}
