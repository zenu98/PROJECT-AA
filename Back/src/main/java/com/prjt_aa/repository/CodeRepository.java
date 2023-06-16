package com.prjt_aa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.prjt_aa.entiry.Code;

@Repository
public interface CodeRepository extends JpaRepository<Code, Integer> {

}
