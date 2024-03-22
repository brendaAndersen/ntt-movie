export interface Movie {
    id: any;
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
    imdbVotes: string,
    Genre: string,
    Plot: string,
    imdbRating: string,
    Actors: string,
}

export interface Search {
    Search: Movie[];
}