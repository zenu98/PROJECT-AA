package com.prjt_aa.entiry;

import com.prjt_aa.dto.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer sn;
	
	String userId;
	String pw;
	String email;
	
	@Enumerated(EnumType.STRING)
	Role role;
}
