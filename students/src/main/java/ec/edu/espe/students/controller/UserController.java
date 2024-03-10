package ec.edu.espe.students.controller;

import ec.edu.espe.students.dto.LoginResponse;
import ec.edu.espe.students.entity.AuthRequest;
import ec.edu.espe.students.entity.UserEntity;
import ec.edu.espe.students.service.JwtService;
import ec.edu.espe.students.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @PostMapping("/addNewUser")
    public String addNewUser(@RequestBody UserEntity userInfo) {
        return userService.createUser(userInfo);
    }

    @GetMapping("/user/get/{idBanner}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<UserEntity> getUser(@PathVariable String idBanner) {
        UserEntity user = userService.readUserById(idBanner);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/user/update")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String putUser(@RequestBody UserEntity userInfo) {
        return userService.updateUser(userInfo);
    }

    @DeleteMapping("/user/delete/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String deleteUser(@PathVariable Integer id) {
        return userService.deleteUser(id);
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String adminProfile() {
        return "Welcome to Admin Profile";
    }

    @PostMapping("/generateToken")
    public LoginResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            UserEntity userEntity = userService.readUserByUsername(authRequest.getUsername());
            String jwt = jwtService.generateToken(authRequest.getUsername());
            return new LoginResponse(jwt, userEntity.getIdBanner(), userEntity.getName(), userEntity.getLastname(), userEntity.getUsername(), userEntity.getEmail(), userEntity.getPhone(), userEntity.getRoles());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @GetMapping("/getRole/{idBanner}")
    public String getRole(@PathVariable String idBanner) {
        return userService.getRole(idBanner);
    }
}
