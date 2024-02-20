package ec.edu.espe.students.repository;

import ec.edu.espe.students.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String username);
    Optional<UserEntity> findByIdBanner(String idBanner);
    Optional<UserEntity> findByUsername(String username);
}