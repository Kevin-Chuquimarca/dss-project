package ec.edu.espe.books.repository;

import ec.edu.espe.books.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<BookEntity, String> {
    List<BookEntity> findByTitle(String title);
    List<BookEntity> findById(Integer cod);
}
