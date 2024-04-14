package com.home.backend.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
public class PageController {

    @RequestMapping("/site")
    public String getMainPage() {
        log.info("GET index.html");
        return "index";
    }

}
