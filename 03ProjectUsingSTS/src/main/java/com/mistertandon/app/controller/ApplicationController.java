package com.mistertandon.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplicationController {

	@GetMapping(value = "/hello")
	public String hello() {
		return "Hello World :-)";
	}
}
