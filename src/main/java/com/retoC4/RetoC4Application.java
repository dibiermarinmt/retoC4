package com.retoC4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan(basePackages = ("com.retoC4.model"))
@SpringBootApplication
public class RetoC4Application {

	public static void main(String[] args) {
		SpringApplication.run(RetoC4Application.class, args);
	}

}
