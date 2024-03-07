package ec.edu.espe.students.service;

import ec.edu.espe.students.entity.UserEntity;
import ec.edu.espe.students.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.when;

class UserServiceTest {
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void readUserById() {
        UserEntity user = new UserEntity("L00384629", "Kevin", "Chuquimarca", "kevin0936", "$2a$10$B0d9QMwFz7nUVIPwPNNXfOH/V34My7BPsPnx791y69A7VzlIJGvtC", "kschuquimarca@espe.edu.ec", "0987654321", "ROLE_USER");
        when(userRepository.findByIdBanner("L00384629")).thenReturn(java.util.Optional.of(user));
        UserEntity userFound = userService.readUserById(user.getIdBanner());
        assertEquals("L00384629", userFound.getIdBanner());
    }

    @Test
    void redUserWithOutId() {
        when(userRepository.findByIdBanner("L00384629")).thenReturn(java.util.Optional.empty());
        UserEntity userFound = userService.readUserById("L00384629");
        assertNull(userFound);
    }


    @Test
    void readUserByUserName() {
        UserEntity user = new UserEntity("L00384629", "Kevin", "Chuquimarca", "kevin0936", "$2a$10$B0d9QMwFz7nUVIPwPNNXfOH/V34My7BPsPnx791y69A7VzlIJGvtC", "kschuquimarca@espe.edu.ec", "0987654321", "ROLE_USER");
        when(userRepository.findByUsername("kevin0936")).thenReturn(java.util.Optional.of(user));
        UserEntity userFound = userService.readUserByUsername("kevin0936");
        assertEquals("kevin0936", userFound.getUsername());
    }

    @Test
    void redUserWithOutUserName() {
        when(userRepository.findByUsername("kevin")).thenReturn(java.util.Optional.empty());
        UserEntity userFound = userService.readUserByUsername("kevin");
        assertNull(userFound);
    }
}