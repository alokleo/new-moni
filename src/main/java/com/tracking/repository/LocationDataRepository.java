package com.tracking.repository;

import com.tracking.model.LocationData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationDataRepository extends JpaRepository<LocationData, Long> {

    List<LocationData> findByDeviceId(String deviceId);
}
