import{Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  @Output() onSave = new EventEmitter<any>();

  save() {

    const film = {
      filmTitle: this.film_form.controls.filmTitle.value,
      filmSys: this.film_form.controls.filmSys.value,
      filmNote: this.film_form.controls.filmNote.value
    };

    this.onSave.emit(film);
  }

 

}
