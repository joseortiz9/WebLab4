package ru.students.lab.weblab4.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class AuthEntryPointJwt implements AuthenticationEntryPoint {
    private static final Logger LOG = LoggerFactory.getLogger(AuthEntryPointJwt.class);

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException ex) throws IOException, ServletException {
        LOG.error("Unauthorized error: {}", ex.getMessage());
        //LOG.error("Unauthorized error:", ex);
        //httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized! " + ex.getMessage());

        httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
        httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        httpServletResponse.getOutputStream().print("Unauthorized! " + ex.getMessage());
        httpServletResponse.getOutputStream().flush();

        //final Map<String, Object> body = new HashMap<>();
        //body.put("status", HttpServletResponse.SC_UNAUTHORIZED);
        //body.put("error", "Unauthorized");
        //body.put("name", "Unauthorized");
        //body.put("message", ex.getMessage());
        //body.put("path", httpServletRequest.getServletPath());

        //final ObjectMapper mapper = new ObjectMapper();
        //mapper.writeValue(httpServletResponse.getOutputStream(), body);
    }
}
