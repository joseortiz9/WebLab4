package ru.students.lab.weblab4.security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import ru.students.lab.weblab4.exceptions.JwtTokenValidationException;
import ru.students.lab.weblab4.security.services.UserDetailsServiceImpl;

import java.io.Serializable;

@Service
public class ParseAuthTokenService implements ParserAuthService {

    @Autowired private JwtUtils jwtUtils;
    @Autowired private UserDetailsServiceImpl userDetailsService;

    @Override
    public <T extends Serializable> Authentication parseAuthObj(T authToken) {
        try {
            String jwt = jwtUtils.parseJwt((String) authToken);
            if (jwt != null) {
                jwtUtils.validateJwtToken(jwt);
                String username = jwtUtils.getUserNameFromJwtToken(jwt);
                UserDetails userAuth = userDetailsService.loadUserByUsername(username);

                return new UsernamePasswordAuthenticationToken(userAuth.getUsername(), null, userAuth.getAuthorities());
            }
        } catch (JwtTokenValidationException e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}
