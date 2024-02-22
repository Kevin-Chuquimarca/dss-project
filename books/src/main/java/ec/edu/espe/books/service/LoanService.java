package ec.edu.espe.books.service;

import ec.edu.espe.books.entity.LoanEntity;
import ec.edu.espe.books.repository.LoanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoanService {
    private final LoanRepository loanRepository;

    public List<LoanEntity> getAll() {
        return loanRepository.findAll();
    }

    public Optional<LoanEntity> getById(Integer id) {
        return loanRepository.findById(id);
    }

    public Optional<LoanEntity> save(LoanEntity loanEntity) {
        try {
            return Optional.of(loanRepository.save(loanEntity));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public Optional<LoanEntity> update(LoanEntity loanEntity) {
        if (!loanRepository.existsById(loanEntity.getCod())) {
            return Optional.empty();
        }
        return Optional.of(loanRepository.save(loanEntity));
    }

    public void deleteById(Integer id) {
        loanRepository.deleteById(id);
    }
}
