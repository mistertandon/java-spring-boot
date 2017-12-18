package com.mistertandon.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentSpringBootAppController {

	@GetMapping(value = "/")
	/**
	 * Alternative of "@GetMapping"
	 * 
	 * @RequestMapping(value = "/", method = RequestMethod.GET)
	 */
	public String hello() {

		return "Hello World!!!!";
	}
}
