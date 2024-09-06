import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit{
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.service.buscarPorId(id).subscribe((pensamento) => this.pensamento = pensamento);
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => this.router.navigate(['/lista-pensamentos']));
    }
  }

  cancelar(){
    this.router.navigate(['/lista-pensamentos']);
  }
}
