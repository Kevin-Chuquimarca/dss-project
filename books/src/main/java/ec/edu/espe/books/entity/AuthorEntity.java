package ec.edu.espe.books.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "author", schema = "books_db")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthorEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    private int id;
    @Basic
    @Column(name = "name", nullable = false, length = 30)
    private String name;
    @Basic
    @Column(name = "lastname", nullable = false, length = 30)
    private String lastname;
}
