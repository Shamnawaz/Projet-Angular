import{Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Film } from '../film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent {


  film_form = new FormGroup({
    filmTitle: new FormControl('', [Validators.required]),
    filmSys: new FormControl('', []),
    filmNote: new FormControl<number | null>(null, [Validators.min(0), Validators.max(5)])
  })

  constructor(private service: FilmService) {}


  @Output() onSave = new EventEmitter<any>();

  addFilms() {
    const film: Partial<Film> =  {
      titre: this.film_form.controls.filmTitle.value as string,
      description: this.film_form.controls.filmSys.value as string,
      note: this.film_form.controls.filmNote.value as number
    };
    
    this.service.addFilms(film).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },

      error: (err) => {
        alert('err');
      },
    });
  }

 

}
