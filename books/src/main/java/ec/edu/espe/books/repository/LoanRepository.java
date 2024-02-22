package ec.edu.espe.books.repository;

import ec.edu.espe.books.entity.LoanEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<LoanEntity, Integer> {
}
