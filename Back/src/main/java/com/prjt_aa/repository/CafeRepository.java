package com.prjt_aa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prjt_aa.entiry.Cafe;

@Repository
public interface CafeRepository extends JpaRepository<Cafe, Integer> {
	
    List<Cafe> findByCodeCateName(String placeCode);
    
	List<Cafe> findByOrderByPrice();
	
}
