package ru.students.lab.weblab4.security.jwt;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import ru.students.lab.weblab4.exceptions.JwtTokenValidationException;

import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger LOG = LoggerFactory.getLogger(JwtUtils.class);
    private static final SignatureAlgorithm HASH_ALGO = SignatureAlgorithm.HS512;

    @Value("${weblab.app.jwtSecret}")
    private String jwtSecret;

    @Value("${weblab.app.jwtExpirationMs}")
    private int jwtExpirationMs;


    public String parseJwt(String headerRequest) {
        if (StringUtils.hasText(headerRequest) && headerRequest.startsWith("Bearer ")) {
            return headerRequest.substring(7);
        }
        return null;
    }

    public String generateJwtToken(Authentication authentication) {
        return Jwts.builder()
                .setSubject(((User) authentication.getPrincipal()).getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(HASH_ALGO, jwtSecret)
                .compact();
    }


    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody().getSubject();
    }


    public void validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
        } catch (SignatureException e) {
            throw new JwtTokenValidationException("Invalid JWT signature: " + e.getMessage(), e);
        } catch (MalformedJwtException e) {
            throw new JwtTokenValidationException("Invalid JWT token: " + e.getMessage(), e);
        } catch (ExpiredJwtException e) {
            throw new JwtTokenValidationException("JWT token is expired: " + e.getMessage(), e);
        } catch (UnsupportedJwtException e) {
            throw new JwtTokenValidationException("JWT token is unsupported: " + e.getMessage(), e);
        } catch (IllegalArgumentException e) {
            throw new JwtTokenValidationException("JWT claims string is empty: " + e.getMessage(), e);
        }
    }
}
