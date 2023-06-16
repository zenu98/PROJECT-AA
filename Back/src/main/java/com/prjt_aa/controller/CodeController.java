package com.prjt_aa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prjt_aa.entiry.Cafe;
import com.prjt_aa.entiry.ConPlace;
import com.prjt_aa.service.CafeService;
import com.prjt_aa.service.ConPlaceService;

@RestController
@RequestMapping("/")
public class CodeController {

	@Autowired CafeService cafeService;
	@Autowired ConPlaceService conPlaceService;

//	카페 목록 구현
    @GetMapping
    public List<Cafe> getCafesByCodeSn(Model model, @RequestParam(defaultValue = "cafe") String cateName) {
    	List<Cafe> cafes = cafeService.getCafes(cateName);
    	model.addAttribute("cafes", cafes);
    	return cafes;
    }

//  편의 시설 목록 구현
	@GetMapping("/conPlaces")
	public List<ConPlace> getConPlaceList(Model model, @RequestParam String cateName) {
		List<ConPlace> conPlaces = conPlaceService.getConPlaces(cateName);
		model.addAttribute("conPlaces", conPlaces);
		return conPlaceService.getConPlaces(cateName);
	}
	
//	카페 음료 가격 순 정렬
	@GetMapping("order")
	public List<Cafe> listPrice(Model model) {
		List<Cafe> cafes = cafeService.listPrice();
		model.addAttribute("cafes", cafes);
		return cafeService.listPrice();
	}

}