import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { response } from 'express';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos = true;

  constructor(private service: PensamentoService){}

  ngOnInit(): void {
      this.service.listar(this.paginaAtual).subscribe((pensamentos) => this.listaPensamentos = pensamentos);
  }

  carregarMaisPensamentos(){
    if(!this.service.haMaisPensamento){
      this.haMaisPensamentos = false;
      return;
    }
    this.service.listar(++this.paginaAtual).subscribe((pensamentos) => this.listaPensamentos.push(...pensamentos));
  }
}
