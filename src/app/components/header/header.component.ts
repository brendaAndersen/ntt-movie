import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../api.service';
import { IconsModule } from '../../icons/icons.module';
import { Movie } from '../../core/model/movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterOutlet,IconsModule],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {
  movies$: Movie[] = [];
  @Output() addToCollection = new EventEmitter<Movie[]>();
  movieName: string | undefined;

 
  constructor (
    private api: ApiService,
  ){}
  ngOnInit(): void {
  }

  
  emitAddToCollection(data: string) {
    if (data.trim()) {
      this.api.getMovieByName(data).subscribe((movie: any) => {
        this.movies$ = movie.Search;
        this.addToCollection.emit(this.movies$);
      });
    }
  }

  changeLocal(){
    window.scrollTo(0 , 720);
  } 
}
