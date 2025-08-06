package com.tracking.controller;

import com.tracking.model.LocationData;
import com.tracking.service.TrackingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tracking")
public class TrackingController {

    @Autowired
    private TrackingService trackingService;

    @PostMapping
    public LocationData receiveLocationData(@RequestBody LocationData locationData) {
        LocationData processedData = trackingService.applyTrackingAlgorithm(locationData);
        return trackingService.saveLocationData(processedData);
    }

    @GetMapping("/{deviceId}")
    public List<LocationData> getDeviceHistory(@PathVariable String deviceId) {
        return trackingService.getDeviceHistory(deviceId);
    }
}
