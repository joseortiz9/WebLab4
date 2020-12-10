package ru.students.lab.weblab4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.students.lab.weblab4.models.PointEntity;
import ru.students.lab.weblab4.models.UserEntity;

import java.util.List;

public interface PointRepository extends JpaRepository<PointEntity, Long> {
    List<PointEntity> findByUser(UserEntity user);
}
