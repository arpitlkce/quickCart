package com.example.demo.hello;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Product> getStudents(){
		List<Product> prodList = studentRepository.findAll();
		return prodList;
	}
	
	public void save(List<Product> stu) {
		studentRepository.deleteAll();
		studentRepository.save(stu);
		
	}

}
