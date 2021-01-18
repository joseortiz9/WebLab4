package ru.students.lab.weblab4.exceptions;

public class JwtTokenValidationException extends RuntimeException {
    public JwtTokenValidationException(String s) {
        super(s);
    }
    public JwtTokenValidationException(String s, Throwable throwable) {
        super(s, throwable);
    }
}
