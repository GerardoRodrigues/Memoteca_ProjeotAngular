import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent{
  pensamento = {
    id: '',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert('Criado!');
  }

  cancelarPensamento(){
    alert('Cancelado!');
  }
}
