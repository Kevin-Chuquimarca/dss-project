package ec.edu.espe.books.repository;

import ec.edu.espe.books.dto.BookAuthorDTO;
import ec.edu.espe.books.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, String> {
    List<BookEntity> findByTitle(String title);

    List<BookEntity> findById(Integer cod);

    @Query("SELECT new ec.edu.espe.books.dto.BookAuthorDTO(b.isbn, b.title, a.name, a.lastname) FROM BookEntity b JOIN AuthorEntity a ON b.id = a.id")
    List<BookAuthorDTO> getBooksAndAuthors();
}
