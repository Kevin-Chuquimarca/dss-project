package ec.edu.espe.students.service;

import ec.edu.espe.students.entity.UserEntity;
import ec.edu.espe.students.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> userDetail = userRepository.findByUsername(username);
        return userDetail.map(UserInfoDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found " + username));
    }

    public String createUser(UserEntity userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userRepository.save(userInfo);
        return "User Added Successfully";
    }

    public UserEntity readUserById(String idBanner) {
        Optional<UserEntity> userSaved = userRepository.findByIdBanner(idBanner);
        return userSaved.orElse(null);
    }

    public String updateUser(UserEntity userInfo) {
        Optional<UserEntity> userSaved = userRepository.findByIdBanner(userInfo.getIdBanner());
        if (userSaved.isPresent()) {
            userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
            userRepository.save(userInfo);
            return "User Updated Successfully";
        }
        return "Failed to Update User";
    }

    public String deleteUser(Integer id) {
        userRepository.deleteById(id);
        return "User Deleted Successfully";
    }
}
