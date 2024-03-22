
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Movie } from '../../core/model/movie.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterOutlet],
  providers: [ApiService]
})
export class CollectionComponent implements OnInit {
  
  movies$:any
  // movies$: Observable<Movie[]> | undefined;

  constructor (
    private api: ApiService,
    
    ){}
    
  ngOnInit(): void{
    this.fetchCollection();
  }
  fetchCollection(){
    this.api.getAllMovies().subscribe((movie: any) => {
      this.movies$ = movie
    })
  }

  onSubmit(form: NgForm){
    if(form){
      this.api.getMovieByName(form.controls['movie'].value)
      .subscribe((movies: Movie[]) => {
        this.movies$ = movies.filter(movie => movie.Title === form.controls['movie'].value)[0];
      });
    }
        
    form.reset();
    return this.movies$;
  }
  
}
