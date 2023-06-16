package com.prjt_aa.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

/*
 * Cafe Entity
 */

@Data
@Entity
public class Cafe {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer sn;

    String cafeName;
	String drinkName;
	int price;
	String address;
	Double lat;
	Double lon;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "placeCode", referencedColumnName = "cateName")
	Code code;

}
