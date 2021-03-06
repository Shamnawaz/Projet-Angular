import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { MyFilmsComponent } from './my-films/my-films.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteFilmsComponent } from './delete-films/delete-films.component';

const routes: Routes = [
  { path: '/addfilm', component: AddOrEditFilmComponent },
  { path: '/', component: AppComponent },  // Wildcard route for a 404 page
 ];

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    MyFilmsComponent,
    DeleteFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
