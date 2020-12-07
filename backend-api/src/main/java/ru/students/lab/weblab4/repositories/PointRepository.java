package ru.students.lab.weblab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.students.lab.weblab4.models.Point;
import ru.students.lab.weblab4.models.User;

import java.util.List;
import java.util.Optional;

public interface PointRepository extends JpaRepository<Point, Long> {
    List<Point> findByUser(User user);
}
