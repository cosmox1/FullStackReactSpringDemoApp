package Backend.backend.controller;

import Backend.backend.model.entity.Movie;
import Backend.backend.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api")
@CrossOrigin("*")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @RequestMapping(
            value = "/add",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Movie> addNewMovie(@RequestBody Movie movie){
        Movie createdMovie= movieService.addNewMovie(movie);
        return new ResponseEntity<>(createdMovie, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Movie>> getAllMovies(){
        List<Movie> movies= movieService.getAllMovies();
        return ResponseEntity.ok(movies);
    }
}
