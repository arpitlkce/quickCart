package com.example.demo.hello;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@Autowired
	private StudentService stuService;
	
	@RequestMapping("/products")
	public List<Product> getProducts() {
		return stuService.getStudents();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/saveCart")
	public void addStudent(@RequestBody List<Product> stuObject) {
		stuService.save(stuObject);
	}
	
}
