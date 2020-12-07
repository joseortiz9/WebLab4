package ru.students.lab.weblab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.students.lab.weblab4.models.User;
import ru.students.lab.weblab4.payload.AuthRequest;
import ru.students.lab.weblab4.payload.JwtResponse;
import ru.students.lab.weblab4.repositories.UserRepository;
import ru.students.lab.weblab4.security.jwt.JwtUtils;

import javax.validation.Valid;
import java.security.Security;

@RestController
@RequestMapping("auth")
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
                        ((User) authentication.getPrincipal()).getUsername()));
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody AuthRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new String("Error: Username is already taken!"));
        }

        User newUser = new User(registerRequest.getUsername(),
                passEncoder.encode(registerRequest.getPassword()));
        userRepository.save(newUser);

        return ResponseEntity.ok(new String("User registered Successfully!"));
    }
}
