package com.rockers.ItineraryService.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rockers.ItineraryService.entity.Itinerary;
@Repository
public interface ItineraryRepository extends JpaRepository<Itinerary, Long> {
    // Define any custom query methods if needed
}
