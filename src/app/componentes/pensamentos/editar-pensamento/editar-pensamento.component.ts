import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../Pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id:[''],
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['']
    })
    const id = String(this.route.snapshot.paramMap.get('id'));
     this.service.buscarPorId(id).subscribe((formulario) => this.formulario.setValue(formulario));
  }

  habilitarBotao():string{
    if(this.formulario.valid){
      return 'botao'
    }
    return 'botao__desabilitado'
  }

  editarPensamento(){
    this.service.editar(this.formulario.value).subscribe(() => this.router.navigate(['/lista-pensamentos']));
  }

  cancelarPensamento(){
    this.router.navigate(['/lista-pensamentos']);
  }
}
