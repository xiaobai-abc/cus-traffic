"use client";
import dynamic from "next/dynamic";
// import AMapLoader from '';
import { Component, useEffect, useState } from "react";
import { useAMap } from "./hook";

function MapContainer() {
  //   const [AMapLoader, setAMapLoader] = useState(null);
  const { AMapLoader, AMapLoad } = useAMap();
  const { mapEX, setMapEX } = useState(null);

  useEffect(() => {
    if (AMapLoader) {
      AMapLoad().then((AMap) => {
        console.log("init", AMap);
        const map = new AMap.Map("container-amp", {
          zoom: 11,
          center: [116.397428, 39.90923]
          //   mapStyle: "amap://styles/normal"
        });
        // setMapEX(map);
      });
    }
  }, [AMapLoader]);

  return (
    <div className="bd h-full w-full">
      <div id="container-amp" className="h-full w-full"></div>
    </div>
  );
}

export default MapContainer;
