
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { Movie } from '../../core/model/movie.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterOutlet,IconsModule],
  providers: [ApiService]
})
export class CollectionComponent implements OnInit {
  
  movies$: Movie[] = [];
  liked: string[] = [];
  movieName: string | undefined;
  // movies$: Observable<Movie[]> | undefined;

  constructor (
    private api: ApiService,
    ){}
    
  ngOnInit(): void{
    this.fetchCollection();
  }
  fetchCollection(){
    this.api.getAllMovies().subscribe((movie: any) => {
      this.movies$ = movie.Search;
    })
  }

  onSubmit(form: NgForm){
    if(this.movieName){
      this.api.getMovieByName(this.movieName).subscribe((movie: any) => {
        this.movies$ = movie.Search;
      })
    }
        
    form.reset();
    return this.movies$;
  }
  handleClick(index: number){
    this.liked.push(this.movies$[index].Title);
  }
  changeLocal(){
    window.scrollTo(0 , 720);
  }  
}
