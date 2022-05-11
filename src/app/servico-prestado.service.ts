import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servico-prestado-form/servico-prestado';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(this.apiURL, servicoPrestado);
  }
}
