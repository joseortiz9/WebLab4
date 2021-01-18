package ru.students.lab.weblab4.security.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;
import ru.students.lab.weblab4.security.services.UserDetailsServiceImpl;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Is the filter that makes one execution before every API request. This one checks if the request has
 * a JWT, it validates it and later from it gets the username to find the UserEntity instance using the userDetailService.
 * Later if everything is okay he will authenticate it and set it to the SecurityContext, so we can
 * call the auth user from anywhere in the app.
 * */
public class AuthTokenFilter extends OncePerRequestFilter {

    @Autowired private ParserAuthService parserAuthService;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        try {
            String token = httpServletRequest.getHeader("Authorization");
            Authentication authentication = parserAuthService.parseAuthObj(token);
            if (authentication != null) {
                //authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: " + e.getMessage());
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
