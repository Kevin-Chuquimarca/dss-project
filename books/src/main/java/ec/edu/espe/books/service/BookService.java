package ec.edu.espe.books.service;

import ec.edu.espe.books.entity.BookEntity;
import ec.edu.espe.books.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    public List<BookEntity> findAll() {
        return bookRepository.findAll();
    }

    public Optional<BookEntity> findById(String id) {
        return bookRepository.findById(id);
    }

    public List<BookEntity> findByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    public List<BookEntity> findByAuthor(Integer cod) {
        return bookRepository.findById(cod);
    }

    public Optional<BookEntity> save(BookEntity bookEntity) {
        try {
            return Optional.of(bookRepository.save(bookEntity));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public Optional<BookEntity> update(BookEntity bookEntity) {
        if (!bookRepository.existsById(bookEntity.getIsbn())) {
            return Optional.empty();
        }
        return Optional.of(bookRepository.save(bookEntity));
    }

    public void deleteById(String id) {
        bookRepository.deleteById(id);
    }
}
