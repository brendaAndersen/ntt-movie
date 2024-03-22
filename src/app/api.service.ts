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
    return this.api.get<Search>(`${this.url}&s=`).pipe(map(result => <Movie[]><unknown>result));
  }

  getMovieByName(query: string): Observable<Movie[]>{
    return this.api.get<Search>(`${this.url}&?t=${query}`).pipe(map(result => <Movie[]>result.Search));
  }

  getMovieById(query: string): Observable<Movie>{
    return this.api.get<Movie>(`${this.url}&plot=full&i=${query}`);
  }
}
