package com.home.backend.controllers;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.home.backend.exceptions.ApiException;
import com.home.backend.services.SearchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@RestController
@RequestMapping("/api")
public class SearchController {

    private final ObjectMapper mapper;
    private final SearchService searchService;
    @Autowired
    SearchController(SearchService searchService) {
        this.mapper = new ObjectMapper();
        this.searchService = searchService;
    }

    @GetMapping("/hash-tags")
    public String getHashTagList() throws JsonProcessingException {
        log.info("GET /api/hash-tags");
        List<String> hashTagList = List.of("javascript", "java", "react", "sql", "angular", "it", "algorithms");
        log.info("Response list: {}", hashTagList);
        return mapper.writeValueAsString(hashTagList);
    }

    @GetMapping("/hash-tag/{name}")
    public List<Long> getPostsIdList(@PathVariable String name) {
        log.info("GET /api/hash-tag/{}", name);
        if (name == null) {
            throw new ApiException("PathVariable \"name\" should not be null");
        }
        List<Long> postIdList = searchService.getPostIdList(name);
        log.info("Response id list: {}", postIdList);
        return postIdList;
    }
}
