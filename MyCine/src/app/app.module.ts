import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { MyFilmsComponent } from './my-films/my-films.component';

const routes: Routes = [
  { path: '/addfilm', component: AddOrEditFilmComponent },
  { path: '/', component: AppComponent },  // Wildcard route for a 404 page
 ];

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    MyFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
