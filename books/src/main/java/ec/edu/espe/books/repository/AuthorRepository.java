package ec.edu.espe.books.repository;

import ec.edu.espe.books.entity.AuthorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<AuthorEntity, Integer> {
}
