import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Film } from '../film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-delete-films',
  templateUrl: './delete-films.component.html',
  styleUrls: ['./delete-films.component.css']
})
export class DeleteFilmsComponent implements OnInit {

  film_form = new FormGroup({
    filmId: new FormControl<number | null>(null, [Validators.required]),
  })

  constructor(private service: FilmService) {}

  ngOnInit(): void {
  }

  deleteFilm() {

    const id = this.film_form.controls.filmId.value as number

    this.service.deleteFilm(id).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },

      error: (err) => {
        alert('err');
      },
    }
    )
  }

}
