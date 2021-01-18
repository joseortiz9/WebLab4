package ru.students.lab.weblab4.security.jwt;

import org.springframework.security.core.Authentication;

import java.io.Serializable;

public interface ParserAuthService {
    <T extends Serializable> Authentication parseAuthObj(T auth);
}
