package com.example.CourseRegistrationSystem.service;

import com.example.CourseRegistrationSystem.model.Course;
import com.example.CourseRegistrationSystem.model.CourseRegistry;
import com.example.CourseRegistrationSystem.repository.CourseRegistryRepo;
import com.example.CourseRegistrationSystem.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepo courseRepo;

    @Autowired
    CourseRegistryRepo courseRegistryRepo;

    public List<Course> availableCourses() {
        return courseRepo.findAll();
    }

    public List<CourseRegistry> enrolledStudent() {
        return courseRegistryRepo.findAll();
    }

    public void enrolledCourse(String name, String emailId, String courseName) {
        CourseRegistry courseRegistry = new CourseRegistry(name, emailId, courseName);
        courseRegistryRepo.save(courseRegistry);
    }
}
