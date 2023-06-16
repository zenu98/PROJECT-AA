package com.prjt_aa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prjt_aa.entiry.Cafe;
import com.prjt_aa.repository.CafeRepository;

@Service
public class CafeService {
    
    @Autowired CafeRepository cafeRepository;
    
    public CafeService(CafeRepository cafeRepository) {
        this.cafeRepository = cafeRepository;
    }

    public List<Cafe> getCafes(String cateName) {
        return cafeRepository.findByCodeCateName(cateName);
    }
    
    public List<Cafe> listPrice() {
    	return cafeRepository.findByOrderByPrice();
    }
    
}
