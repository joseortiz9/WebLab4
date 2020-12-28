package ru.students.lab.weblab4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;
import ru.students.lab.weblab4.models.PointEntity;
import ru.students.lab.weblab4.models.UserEntity;
import ru.students.lab.weblab4.payload.ObjWithMsgResponse;
import ru.students.lab.weblab4.payload.PointRequest;
import ru.students.lab.weblab4.repositories.PointRepository;
import ru.students.lab.weblab4.repositories.UserRepository;
import ru.students.lab.weblab4.security.services.UserDetailsServiceImpl;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api")
public class PointController {

    @Autowired private PointRepository pointRepository;
    @Autowired private UserRepository userRepository;

    @GetMapping("/points")
    public ResponseEntity<List<PointEntity>> getAllPoints() {
        return ResponseEntity.ok(pointRepository.findByUser(getAuthUserAsEntity()));
    }

    @PostMapping("/points")
    public ResponseEntity<?> addPoint(@Valid @RequestBody PointRequest pointRequest) {
        PointEntity newPoint =
                new PointEntity(pointRequest.getX(), pointRequest.getY(), pointRequest.getR(), getAuthUserAsEntity());
        if (newPoint.getR() < 0)
            return ResponseEntity.badRequest().body(new String("R can not be negative!"));
        PointEntity PointWithID = pointRepository.save(newPoint);

    return ResponseEntity.ok(new ObjWithMsgResponse<PointEntity>("PointEntity saved Successfully!", PointWithID));
    }

    //TODO structure it better to separate the point and user logic
    private UserEntity getAuthUserAsEntity() {
        return userRepository.findByUsername((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).get();
    }
}
