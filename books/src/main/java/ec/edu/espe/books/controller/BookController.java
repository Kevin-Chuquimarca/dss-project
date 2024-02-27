package ec.edu.espe.books.controller;

import ec.edu.espe.books.entity.BookEntity;
import ec.edu.espe.books.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/books")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private final BookService bookService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<BookEntity> getAll() {
        return bookService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookEntity> getById(@PathVariable String id) {
        Optional<BookEntity> book = bookService.findById(id);
        if (book.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(book.orElseThrow());
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<List<BookEntity>> getByTitle(@PathVariable String title) {
        List<BookEntity> books = bookService.findByTitle(title);
        if (books.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(books);
    }

    @GetMapping("/author/{cod}")
    public ResponseEntity<List<BookEntity>> getByAuthor(@PathVariable Integer cod) {
        List<BookEntity> books = bookService.findByAuthor(cod);
        if (books.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(books);
    }

    @PostMapping
    public ResponseEntity<BookEntity> post(@RequestBody BookEntity book) {
        Optional<BookEntity> newBook = bookService.save(book);
        if (newBook.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(newBook.orElseThrow());
    }

    @PutMapping
    public ResponseEntity<BookEntity> put(@RequestBody BookEntity book) {
        Optional<BookEntity> newBook = bookService.update(book);
        if (newBook.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(newBook.orElseThrow());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        bookService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
