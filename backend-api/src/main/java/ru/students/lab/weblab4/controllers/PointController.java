package ru.students.lab.weblab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.students.lab.weblab4.models.Point;
import ru.students.lab.weblab4.models.User;
import ru.students.lab.weblab4.repositories.PointRepository;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PointController {

    @Autowired
    private PointRepository pointRepository;

    private final User authUser;

    public PointController() {
        authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @GetMapping("/points")
    public ResponseEntity<List<Point>> getAllPoints() {
        return ResponseEntity.ok(pointRepository.findByUser(authUser));
    }
}
