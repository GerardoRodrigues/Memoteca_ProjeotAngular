import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService, private router: Router){
  }

  ngOnInit(): void {
      this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => this.listaPensamentos = pensamentos);
  }

  carregarMaisPensamentos(){
    if(!this.service.haMaisPensamento){
      this.haMaisPensamentos = false;
      return;
    }
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => this.listaPensamentos.push(...pensamentos));
  }

  pesquisarPensamentos(){
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentos) => this.listaPensamentos = pensamentos)
  }

  mostrarFavoritos(){
    this.paginaAtual = 1
    this.haMaisPensamentos = true;
    this.favorito = true;
    this.titulo = 'Meus Favoritos';
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((pensamentosFavoritos) => {
      this.listaPensamentos = pensamentosFavoritos;
      this.listaFavoritos = pensamentosFavoritos;
    });
  }

  recarregarMural(){
    this.favorito = false;
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.haMaisPensamento = true

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
