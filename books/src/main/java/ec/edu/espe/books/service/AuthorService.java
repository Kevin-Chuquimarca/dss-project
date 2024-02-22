package ec.edu.espe.books.service;

import ec.edu.espe.books.entity.AuthorEntity;
import ec.edu.espe.books.repository.AuthorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthorService {
    private final AuthorRepository authorRepository;

    public List<AuthorEntity> getAll() {
        return authorRepository.findAll();
    }

    public Optional<AuthorEntity> getById(Integer id) {
        return authorRepository.findById(id);
    }

    public Optional<AuthorEntity> save(AuthorEntity authorEntity) {
        try {
            return Optional.of(authorRepository.save(authorEntity));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public Optional<AuthorEntity> update(AuthorEntity authorEntity) {
        if (!authorRepository.existsById(authorEntity.getId())) {
            return Optional.empty();
        }
        return Optional.of(authorRepository.save(authorEntity));
    }

    public void deleteById(Integer id) {
        authorRepository.deleteById(id);
    }
}
