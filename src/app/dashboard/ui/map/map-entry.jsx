"use client";

import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#02171C]"></div>
});

function MapEntry() {
  return <MapContainer></MapContainer>;
}

export default MapEntry;
