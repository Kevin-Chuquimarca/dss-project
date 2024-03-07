package ec.edu.espe.books.controller;

import ec.edu.espe.books.dto.BookAuthorDTO;
import ec.edu.espe.books.service.BookAuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/books-authors")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BookAuthorController {

    private final BookAuthorService bookAuthorService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<BookAuthorDTO> getBooksAndAuthors() {
        return bookAuthorService.getBooksAndAuthors();
    }

}
