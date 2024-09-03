import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mais uma comunicação entre componentes',
      autoria: 'Angular1',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Mais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicaçãoMais mais uma comunicação',
      autoria: 'Angular2',
      modelo: 'modelo3'
    }
  ];
}
