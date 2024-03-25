
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { Movie } from '../../core/model/movie.model';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-collection',
    templateUrl: './collection.component.html',
    styleUrl: './collection.component.scss',
    standalone: true,
    providers: [ApiService],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterOutlet, IconsModule, HeaderComponent]
})
export class CollectionComponent implements OnInit {
  
  liked: string[] = [];
  movies$: Movie[] = [];
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
  addToCollection(data: any) {
    this.movies$ = data;
    return this.movies$;
  }
 
  handleClick(index: number){
    this.liked.push(this.movies$[index].Title);
  }

  emitAddToCollection(data: any) {
    this.movies$ = data;
  }

  changeLocal(){
    window.scrollTo(0 , 720);
  } 
}
