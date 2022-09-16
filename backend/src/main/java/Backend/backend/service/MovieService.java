package Backend.backend.service;

import Backend.backend.model.entity.Movie;
import Backend.backend.repository.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    @Autowired
    public MovieService(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }

    public Movie addNewMovie(Movie movie){
        return movieRepo.save(movie);
    }

    public List<Movie> getAllMovies(){
        return movieRepo.findAll();
    }
}
