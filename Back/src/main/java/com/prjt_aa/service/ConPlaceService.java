package com.prjt_aa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prjt_aa.entiry.ConPlace;
import com.prjt_aa.repository.ConPlaceRepository;

@Service
public class ConPlaceService {
	
	@Autowired ConPlaceRepository conPlaceRepository;
    
    public ConPlaceService(ConPlaceRepository conPlaceRepository) {
		this.conPlaceRepository = conPlaceRepository;
	}

	public List<ConPlace> getConPlaces(String placeCode) {
		return conPlaceRepository.findByCodeCateName(placeCode);
	}
}
