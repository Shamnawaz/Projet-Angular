import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() film: Film;

}
