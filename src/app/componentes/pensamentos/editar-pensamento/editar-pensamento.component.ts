import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{
  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
     this.service.buscarPorId(id).subscribe((pensamento) => this.pensamento = pensamento);
  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => this.router.navigate(['/lista-pensamentos']));
  }

  cancelarPensamento(){
    this.router.navigate(['/lista-pensamentos']);
  }
}
