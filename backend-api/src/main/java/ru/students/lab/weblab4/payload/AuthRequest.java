package ru.students.lab.weblab4.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class AuthRequest {
    @NotBlank @NotNull
    private String username, password;

    public AuthRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
