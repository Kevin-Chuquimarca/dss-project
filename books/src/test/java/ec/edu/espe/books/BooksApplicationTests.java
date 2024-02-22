package ec.edu.espe.books;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class BooksApplicationTests {

    @Test
    void contextLoads() {
        assertDoesNotThrow(() -> {
            // if context was successfully loaded, this block will be executed
        });
    }

}
