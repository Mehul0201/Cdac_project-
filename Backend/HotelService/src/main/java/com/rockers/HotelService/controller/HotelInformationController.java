package com.rockers.HotelService.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.rockers.HotelService.entity.HotelInformation;
import com.rockers.HotelService.repository.HotelInformationRepository;

@RestController
@RequestMapping("/api")
public class HotelInformationController {
    private final HotelInformationRepository hotelInformationRepository;

    @Autowired
    public HotelInformationController(HotelInformationRepository hotelInformationRepository) {
        this.hotelInformationRepository = hotelInformationRepository;
    }

    @GetMapping("/getallhotels")
    public List<HotelInformation> getAllHotels() {
        return hotelInformationRepository.findAll();
    }

    @GetMapping("/gethotel/{id}")
    public ResponseEntity<HotelInformation> getHotelById(@PathVariable Long id) {
        Optional<HotelInformation> hotel = hotelInformationRepository.findById(id);
        return hotel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addhotel")
    public ResponseEntity<HotelInformation> createHotel(@RequestBody HotelInformation hotel) {
        HotelInformation createdHotel = hotelInformationRepository.save(hotel);
        return ResponseEntity.created(URI.create("/api/hotels/" + createdHotel.getHotelId())).body(createdHotel);
    }

    @PutMapping("/edithotel/{id}")
    public ResponseEntity<HotelInformation> updateHotel(@PathVariable Long id, @RequestBody HotelInformation hotel) {
        if (!hotelInformationRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        hotel.setHotelId(id);
        HotelInformation updatedHotel = hotelInformationRepository.save(hotel);
        return ResponseEntity.ok(updatedHotel);
    }

    @DeleteMapping("/deletehotel/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id) {
        if (!hotelInformationRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        hotelInformationRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
