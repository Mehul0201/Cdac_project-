package com.rockers.ItineraryService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;

import com.rockers.ItineraryService.entity.Itinerary;
import com.rockers.ItineraryService.repository.ItineraryRepository;

@RestController
@RequestMapping("/api/itineraries")
public class ItineraryController {
    private final ItineraryRepository itineraryRepository;

    @Autowired
    public ItineraryController(ItineraryRepository itineraryRepository) {
        this.itineraryRepository = itineraryRepository;
    }

    @GetMapping
    public List<Itinerary> getAllItineraries() {
        return itineraryRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Itinerary> addItinerary(@RequestBody Itinerary itinerary) {
        Itinerary addedItinerary = itineraryRepository.save(itinerary);
        return ResponseEntity.created(URI.create("/api/itineraries/" + addedItinerary.getId())).body(addedItinerary);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Itinerary> updateItinerary(@PathVariable Long id, @RequestBody Itinerary updatedItinerary) {
        if (itineraryRepository.existsById(id)) {
            updatedItinerary.setId(id); // Set the ID to match the path variable
            Itinerary savedItinerary = itineraryRepository.save(updatedItinerary);
            return ResponseEntity.ok(savedItinerary);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItinerary(@PathVariable Long id) {
        if (itineraryRepository.existsById(id)) {
            itineraryRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

