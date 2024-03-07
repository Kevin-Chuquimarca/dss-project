package ec.edu.espe.students.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private String jwt;
    private String idBanner;
    private String name;
    private String lastname;
    private String username;
    private String email;
    private String phone;
    private String roles;
}
