package ru.students.lab.weblab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;
import ru.students.lab.weblab4.models.UserEntity;
import ru.students.lab.weblab4.payload.AuthRequest;
import ru.students.lab.weblab4.payload.JwtResponse;
import ru.students.lab.weblab4.repositories.UserRepository;
import ru.students.lab.weblab4.security.jwt.JwtUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/auth")
public class AuthController {
    @Autowired private AuthenticationManager authManager;
    @Autowired private UserRepository userRepository;
    @Autowired private PasswordEncoder passEncoder;
    @Autowired private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest loginRequest) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return ResponseEntity.ok(
                new JwtResponse(
                        jwtUtils.generateJwtToken(authentication),
                        ((UserDetails) authentication.getPrincipal()).getUsername()));
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody AuthRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new String("Username is already taken!"));
        }

        UserEntity newUser = new UserEntity(registerRequest.getUsername(),
                passEncoder.encode(registerRequest.getPassword()));
        userRepository.save(newUser);

        return login(registerRequest);
    }


    @PostMapping("/check_session")
    public ResponseEntity<?> checkSession() {
        return ResponseEntity.ok("welcome back!");
    }


    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
            return ResponseEntity.ok("Good Bye!");
        }

        return ResponseEntity.badRequest().body("Problem logging out");
    }
}
