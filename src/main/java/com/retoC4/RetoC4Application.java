package com.retoC4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EntityScan(basePackages = ("com.retoC4.model"))
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class RetoC4Application {

	public static void main(String[] args) {
		SpringApplication.run(RetoC4Application.class, args);
	}
        
        @Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
                                        .allowedOrigins("http://localhost:8080") // poner http://localhost:8080 o /**                                        .allowedMethods("*")
                                        .allowedHeaders("*");
			}
		};
	}

}
