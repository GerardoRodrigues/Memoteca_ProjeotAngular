import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './Pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly apiUrl = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.apiUrl);
  }

  criar(pensamento: Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.apiUrl, pensamento);
  }

  excluir(id: string):Observable<Pensamento>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: string):Observable<Pensamento>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento):Observable<Pensamento>{
    const url = `${this.apiUrl}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }
}
