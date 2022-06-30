import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from '../film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getFilms(){
    return this.httpClient.get<Film[]>(`${environment.api}/films`);
  }

  addFilms(data: Partial<Film>) {
    return this.httpClient.post<Film>(`${environment.api}/films`, data);
  }

  deleteFilm(id: number){
    return this.httpClient.delete<Film>(`${environment.api}/films/${id}`);
  }

}


