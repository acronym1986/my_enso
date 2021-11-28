import React, { useState, useMemo, useRef } from "react";

import { useSpring, animated } from "react-spring";
import { geoOrthographic, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import jsonData from "../Data/ne_110m_land.json";


const cities = [
    { name: "Australia", coordinates: [151.206079, -33.868857],  population: 25690000 },
    { name: "New Zealand", coordinates: [174.8860, -40.9006],  population: 3877117 },
    { name: "Italy", coordinates: [12.5674, 41.8719],  population: 30337397 },
    { name: "Japan", coordinates: [138.2529,36.2048],   population: 24998000 },
    { name: "Singapore", coordinates: [103.8198,1.3521],  population: 3914817 },
    { name: "Denmark", coordinates: [56.2639,56.2639],  population: 23480000 },
    { name: "Germany", coordinates: [51.1657,10.4515],  population: 23416000 },
    { name: "Greece", coordinates: [39.0742,21.8243],   population: 22123000 },
    { name: "Iceland", coordinates: [64.9631,19.0208],  population: 21009000 }
 ]

const COUNTRIES = feature(jsonData, jsonData.objects.land).features;

const MiniGlobe = animated(({ lat = 0, lng = 0, size = 200, onGlobeClick }) => {
  const svgref = useRef();
  const [rotation, setRotation] = useState(50);

  const projection = useMemo(() => {
    return geoOrthographic()
      .translate([size / 2, size / 2])
      .scale(size / 2)
      .clipAngle(90)
      .rotate([rotation, -lng]);
  }, [size, rotation, lng]);

  window.requestAnimationFrame(() => {
    setRotation( rotation + 0.2)
  })

  function returnProjectionWhenValid(point, index) {
    const retVal = projection(point);
    if (retVal === null || retVal === void 0 ? void 0 : retVal.length) {
        return retVal[index];
    }
    return 0;
  }

  

  const handleMarkerClick = i => {
    console.log("Marker: ", cities[i])
  }

  const pathgen = geoPath(projection);
  return (
    <svg ref={svgref} width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="#e8e8e8"  
        onClick={evt => {
          let rect = svgref.current.getBoundingClientRect();
          const [lat, lng] = projection.invert([
            evt.pageX - rect.left,
            evt.pageY - rect.top
          ]);
          onGlobeClick.call(null, lat, lng);
        }}
        style={{ cursor: "pointer" }}
      />
      <g style={{ pointerEvents: "none" }}>
        {COUNTRIES.map((d, i) => (
          <path key={`path-${i}`} d={pathgen(d)} />
        ))}
      </g>
      <g  >
        {cities.map((city, i) => (
          <circle
          cx={returnProjectionWhenValid(city.coordinates, 0)}
          cy={returnProjectionWhenValid(city.coordinates, 1)}
          r={city.population / 3000000}
          fill="#0000FF"
          stroke="#FFFFFF"
          onClick={ () => handleMarkerClick(i) }
        />
        ))}
      </g>
    </svg>
  );
});

const GlobeVis = ({ size = 200 }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const { lat, lng } = useSpring({
    lat: center.lat,
    lng: center.lng
  });
  return (
    <MiniGlobe
      lat={lat}
      lng={lng}
      size={size}
      onGlobeClick={(lat, lng) => {
        setCenter({
          lat,
          lng
        });
      }}
    />
  );
};
export default GlobeVis;