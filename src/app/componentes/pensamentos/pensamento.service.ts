import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './Pensamento';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly apiUrl = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  haMaisPensamento: boolean = true;

  listar(pagina: number, filtro: string): Observable<Pensamento[]>{
    const itensPorPagina = 6;

    let params = new HttpParams().set("_page", pagina).set("_per_page", itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set("autoria", filtro);
    }

    return this.http.get<any>(this.apiUrl, {params}).pipe(map(response => {
      if(response.next === null){
        this.haMaisPensamento = false;
        return response.data;
      }
      return response.data;
    }));
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

  mudarFavorito(pensamento: Pensamento):Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    return this.editar(pensamento);
  }
}
