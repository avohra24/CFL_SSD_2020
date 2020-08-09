package com.cfl.socialservices.web;

import com.cfl.socialservices.domain.Response;
import com.cfl.socialservices.domain.Student;
import com.cfl.socialservices.domain.StudentWrapper;
import com.cfl.socialservices.repository.StudentRepository;
import com.cfl.socialservices.service.ImmediateNeedsService;
import com.cfl.socialservices.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private ImmediateNeedsService immediateNeedsService;

    @GetMapping(path="/all")
    public ResponseEntity<?> getAllStudents(){
        Iterable<Student> students = studentService.findAllStudents();
        return new ResponseEntity<Iterable<Student>>(students, HttpStatus.OK);
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<?> getStudent(@PathVariable Integer studentId) {
        StudentWrapper studentWrapper = studentService.findStudent(studentId);
        return new ResponseEntity<>(studentWrapper, HttpStatus.OK);
    }

    @PostMapping(path="")
    public ResponseEntity<?> createNewStudent(@RequestBody StudentWrapper studentWrapper) {
        Student student = studentWrapper.getPersonalInformation();
        Response studentResponse = studentService.createNewStudent(studentWrapper);

        return new ResponseEntity<>(studentResponse, HttpStatus.OK);
    }

}
