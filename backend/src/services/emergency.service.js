const AmbulanceProvider = require("../models/AmbulanceProvider");
const Hospital = require("../models/Hospital");
const { getDistanceKm } = require("../utils/distance");

const findNearbyServices = async (lat, lng) => {
  const ambulances = await AmbulanceProvider.find({ available: true });
  const hospitals = await Hospital.find();

  const nearbyAmbulances = ambulances
    .map(a => ({
      ...a.toObject(),
      distance: getDistanceKm(lat, lng, a.location.lat, a.location.lng)
    }))
    .filter(a => a.distance <= 10)
    .sort((a, b) => a.distance - b.distance);

  const nearbyHospitals = hospitals
    .map(h => ({
      ...h.toObject(),
      distance: getDistanceKm(lat, lng, h.location.lat, h.location.lng)
    }))
    .filter(h => h.distance <= 10)
    .sort((a, b) => a.distance - b.distance);

  return { nearbyAmbulances, nearbyHospitals };
};

module.exports = { findNearbyServices };
