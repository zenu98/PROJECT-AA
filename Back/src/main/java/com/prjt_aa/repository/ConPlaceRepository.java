package com.prjt_aa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prjt_aa.entiry.ConPlace;

@Repository
public interface ConPlaceRepository extends JpaRepository<ConPlace, Integer> {
	
    List<ConPlace> findByCodeCateName(String placeCode);
    
}
