package ec.edu.espe.books.controller;

import ec.edu.espe.books.entity.AuthorEntity;
import ec.edu.espe.books.service.AuthorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/authors")
@RequiredArgsConstructor
public class AuthorController {
    private final AuthorService authorService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<AuthorEntity> getAll() {
        return authorService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuthorEntity> getById(@PathVariable Integer id) {
        Optional<AuthorEntity> author = authorService.getById(id);
        if (author.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(author.orElseThrow());
    }

    @PostMapping
    public ResponseEntity<AuthorEntity> post(@RequestBody AuthorEntity author) {
        Optional<AuthorEntity> newAuthor = authorService.save(author);
        if (newAuthor.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(newAuthor.orElseThrow());
    }

    @PutMapping
    public ResponseEntity<AuthorEntity> put(@RequestBody AuthorEntity author) {
        Optional<AuthorEntity> newAuthor = authorService.update(author);
        if (newAuthor.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(newAuthor.orElseThrow());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        authorService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
