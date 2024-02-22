package ec.edu.espe.books.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "book", schema = "books_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookEntity {
    @Id
    @Column(name = "isbn", nullable = false, length = 17)
    private String isbn;
    @Basic
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "title", nullable = false, length = 50)
    private String title;
}
