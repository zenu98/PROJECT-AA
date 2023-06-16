package com.prjt_aa.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Code {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer sn;

	String cateName;
}
