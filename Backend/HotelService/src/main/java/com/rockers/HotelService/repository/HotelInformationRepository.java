package com.rockers.HotelService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rockers.HotelService.entity.HotelInformation;

@Repository
public interface HotelInformationRepository extends JpaRepository<HotelInformation, Long> {
}
