import React, { useState, useEffect } from "react"
import { geoOrthographic, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import {v4 as uuid} from 'uuid'
//import { Feature, FeatureCollection, Geometry } from "geojson"
//import uuid from 'uuid';

const cities = [
   { name: "Australia", coordinates: [151.206079, -33.868857],  population: 25690000 },
   { name: "Jakarta", coordinates: [106.8650,-6.1751],  population: 30539000 },
   { name: "Delhi", coordinates: [77.1025,28.7041],   population: 24998000 },
   { name: "Manila", coordinates: [120.9842,14.5995],  population: 24123000 },
   { name: "Seoul", coordinates: [126.9780,37.5665],  population: 23480000 },
   { name: "Shanghai", coordinates: [121.4737,31.2304],  population: 23416000 },
   { name: "Karachi", coordinates: [67.0099,24.8615],   population: 22123000 },
   { name: "Beijing", coordinates: [116.4074,39.9042],  population: 21009000 }
]

const scale = 200; //200
const cx = 300; //400 /300
const cy = 150; //150
const initRotation = 50;

const Worldmap = () => {
   
   const [geographies, setGeographies] = useState([]);
   const [rotation, setRotation] = useState(initRotation);
   

   useEffect(() => {
       fetch('/Data/world-110m.json')
           .then((response) => {
           if (response.status !== 200) {
               console.log(`Houston we have a problem:${response.status}`);
               return;
           }
           response.json()
               .then((worldData) => {
               const mapFeatures = feature(worldData, worldData.objects.countries).features;
               setGeographies(mapFeatures);
           });
       });
   }, []);
   
   window.requestAnimationFrame(() => {
       setRotation( rotation + 0.2)
     })

   const projection = geoOrthographic().scale(scale).translate([cx, cy]).rotate([rotation,0]);
   
   function returnProjectionWhenValid(point, index) {
       const retVal = projection(point);
       if (retVal === null || retVal === void 0 ? void 0 : retVal.length) {
           return retVal[index];
       }
       return 0;
   }

     const handleCountryClick = countryIndex => {
       console.log("Clicked on country: ", geographies[countryIndex])
     }
   
     const handleMarkerClick = i => {
       console.log("Marker: ", cities[i])
     }

   return (React.createElement(React.Fragment, null,
           React.createElement("svg", { width: scale * 2, height: scale * 1, viewBox: "10 0 900 300" },//second:0 last two:900 450 },
           React.createElement("g", null,
           React.createElement("circle", { fill: "#E8E8E8", cx: cx, cy: cy, r: scale })),
           React.createElement("g", null, geographies.map((d, i) => 
                (React.createElement("path", { 
                    key: `path-${uuid()}`, 
                    d: geoPath().projection(projection)(d), 
                    fill: `rgba(38, 50, 56, ${(1 / (geographies ? geographies.length : 0)) * i})`, 
                    stroke: "aliceblue", 
                    strokeWidth: 0.5,
                    onClick: () => handleCountryClick(i)
                   })))),
           React.createElement("g", null, cities.map((city, i) => 
                (React.createElement("circle", { 
                    key: `marker-${uuid}`, 
                    cx: returnProjectionWhenValid(city.coordinates, 0), 
                    cy: returnProjectionWhenValid(city.coordinates, 1), 
                    r: city.population / 3000000, 
                    fill: "#0000FF", 
                    stroke: "#FFFFFF", 
                    onClick: () => handleMarkerClick(i) }))))),
       ));
        
};
export default Worldmap;