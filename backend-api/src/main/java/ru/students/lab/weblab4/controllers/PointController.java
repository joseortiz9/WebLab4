package ru.students.lab.weblab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import ru.students.lab.weblab4.models.Point;
import ru.students.lab.weblab4.models.User;
import ru.students.lab.weblab4.payload.AuthRequest;
import ru.students.lab.weblab4.payload.PointRequest;
import ru.students.lab.weblab4.repositories.PointRepository;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PointController {

    @Autowired
    private PointRepository pointRepository;

    @GetMapping("/points")
    public ResponseEntity<List<Point>> getAllPoints() {
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(pointRepository.findByUser(authUser));
    }

    @PostMapping("/points/add")
    public ResponseEntity<?> addPoint(@Valid @RequestBody PointRequest pointRequest) {
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Point newPoint = new Point(pointRequest.getX(), pointRequest.getY(), pointRequest.getR(), authUser);
        newPoint.checkInsideFunc();
        pointRepository.save(newPoint);

        return ResponseEntity.ok(new String("Point saved Successfully!"));
    }
}
