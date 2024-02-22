package ec.edu.espe.books.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "loan", schema = "books_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoanEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "cod", nullable = false)
    private int cod;
    @Basic
    @Column(name = "isbn", nullable = false, length = 17)
    private String isbn;
    @Basic
    @Column(name = "date_loan", nullable = false)
    private Date dateLoan;
    @Basic
    @Column(name = "date_return", nullable = false)
    private Date dateReturn;
    @Basic
    @Column(name = "state", nullable = false, length = 20)
    private String state;
    @Basic
    @Column(name = "id_banner", nullable = false, length = 9)
    private String idBanner;
}
