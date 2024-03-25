import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, Search } from './core/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://www.omdbapi.com/?i=tt3896198&apikey=11dd99db';
  
  constructor(private api: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.api.get<Search>(`${this.url}&s=all`).pipe(map(result => <Movie[]><unknown>result));
  }

  getMovieByName(name: string): Observable<Movie[]>{
    return this.api.get<Search>(`${this.url}&s=${name}`).pipe(map(result => <Movie[]><unknown>result));
  }

  getMovieById(query: string): Observable<Movie>{
    return this.api.get<Movie>(`${this.url}&plot=full&i=${query}`);
  }
}
