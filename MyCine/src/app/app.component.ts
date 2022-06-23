import { Component } from '@angular/core';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { Film } from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  films: Film[] = [{titre: "TEST", description: "MESSAGE", note: 4}];
  title = 'MyCine';

  addOrUpdateFilm(film: Film) {
    this.films.push(film);
    console.log(this.films);
  }
}

