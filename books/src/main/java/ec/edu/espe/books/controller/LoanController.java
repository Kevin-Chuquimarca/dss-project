package ec.edu.espe.books.controller;

import ec.edu.espe.books.entity.LoanEntity;
import ec.edu.espe.books.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/loans")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class LoanController {
    private final LoanService loanService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<LoanEntity> getAll() {
        return loanService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanEntity> getById(@PathVariable Integer id) {
        Optional<LoanEntity> loan = loanService.getById(id);
        if (loan.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(loan.orElseThrow());
    }

    @PostMapping
    public ResponseEntity<LoanEntity> post(@RequestBody LoanEntity loan) {
        Optional<LoanEntity> newLoan = loanService.save(loan);
        if (newLoan.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(newLoan.orElseThrow());
    }

    @PutMapping
    public ResponseEntity<LoanEntity> put(@RequestBody LoanEntity loan) {
        Optional<LoanEntity> newLoan = loanService.update(loan);
        if (newLoan.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(newLoan.orElseThrow());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        loanService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
