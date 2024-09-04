import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './Pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly apiUrl = 'http://localhost:3000/pensamentos';

  constructor(private htpp: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.htpp.get<Pensamento[]>(this.apiUrl);
  }

  criar(pensamento: Pensamento):Observable<Pensamento>{
    return this.htpp.post<Pensamento>(this.apiUrl, pensamento);
  }
}
