import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {path:'', redirectTo: "lista-pensamentos", pathMatch: "full"},
  {path:'criar-pensamento', component: CriarPensamentoComponent},
  {path:'lista-pensamentos', component: ListarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
