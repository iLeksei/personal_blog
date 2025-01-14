package com.home.backend.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class MainController {

    @GetMapping("/health-check")
    public String healthCheck() {
        log.info("alive");
        return "alive";
    }
}
