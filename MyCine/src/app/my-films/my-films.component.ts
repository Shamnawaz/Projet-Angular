import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => {
      console.warn(films)
      this.films = films;
    })
  }  
}
