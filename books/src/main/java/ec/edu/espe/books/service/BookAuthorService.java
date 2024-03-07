package ec.edu.espe.books.service;

import ec.edu.espe.books.dto.BookAuthorDTO;
import ec.edu.espe.books.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookAuthorService {
    private final BookRepository bookRepository;

    public List<BookAuthorDTO> getBooksAndAuthors() {
        return bookRepository.getBooksAndAuthors();
    }
}
