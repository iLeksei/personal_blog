package com.home.backend.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class SearchService {


    public List<Long> getPostIdList(String hashTag) {
        log.info("Searching posts id for hash-tag: {}", hashTag);
        return List.of(1l, 2L, 3L);
    }
}
