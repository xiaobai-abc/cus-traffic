"use client";
import { useEffect } from "react";
import { withBasePath } from "@/lib/base-path";

const mapRuntime = {
  map: null,
  AMap: null
};

function MapContainer() {
  useEffect(() => {
    let cancelled = false;
    let timeoutId = null;
    let idleId = null;

    const loadMap = async () => {
      if (cancelled) return;

      const container = document.getElementById("container-amp");
      if (!container) return;

      let AMap = mapRuntime.AMap;
      if (!AMap) {
        window._AMapSecurityConfig = {
          securityJsCode: "79b11f3c6c2433f3a9e50e240432a005"
        };

        const module = await import("@amap/amap-jsapi-loader");
        const AMapLoader = module.default;

        AMap = await AMapLoader.load({
          key: "070788fed9d2e9cc46b2df0b5b9dfd7a",
          version: "2.0",
          plugins: [
            "AMap.Scale",
            "AMap.ToolBar",
            "AMap.Driving",
            "AMap.Polyline",
            "AMap.Marker"
          ],
          viewMode: "2D"
        });

        mapRuntime.AMap = AMap;
      }

      if (cancelled) return;

      mapRuntime.map?.destroy();

      const map = new AMap.Map("container-amp", {
        zoom: 15,
        center: [119.171831, 29.02902],
        mapStyle: "amap://styles/4e0f3bb5e1252540cd872dc497c0e4e2"
      });

      mapRuntime.map = map;

      initAMap({ AMap, map });
    };

    const scheduleMapLoad = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => {
          loadMap();
        }, { timeout: 1000 });
      } else {
        timeoutId = window.setTimeout(() => {
          loadMap();
        }, 120);
      }
    };

    scheduleMapLoad();

    return () => {
      cancelled = true;
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      mapRuntime.map?.destroy();
      mapRuntime.map = null;
    };
  }, []);

  function initAMap({ AMap, map }) {
    map.addControl(new AMap.ToolBar());
    map.addControl(new AMap.Scale());

    const driving = new AMap.Driving({
      ferry: 1,
      showTraffic: false,
      autoFitView: false
    });

    const points = [
      [119.17192591293622, 29.029077027763332],
      [119.16796554232792, 29.022708368386546]
    ];

    driving.search(...points, function (status, result) {
      if (status !== "complete" || !result?.routes?.length) return;

      const steps = result.routes[0].steps || [];
      const lnglatArrs = steps
        .flatMap((step) => step.path || [])
        .map((point) => new AMap.LngLat(point.lng, point.lat));

      const customPolyline = new AMap.Polyline({
        path: lnglatArrs,
        strokeColor: "#4F7355",
        strokeWeight: 5,
        strokeOpacity: 1,
        strokeStyle: "solid",
        isOutline: true,
        borderWeight: 1,
        outlineColor: "#FFEC1F",
        strokeLineJoin: "round"
      });
      map.add(customPolyline);

      const start = result.start.location;
      const end = result.end.location;

      const startMarker = new AMap.Marker({
        position: new AMap.LngLat(start.lng, start.lat),
        title: "起点",
        anchor: "bottom-center",
        icon: new AMap.Icon({
          size: new AMap.Size(40, 40),
          image: withBasePath("/image/map/start.svg"),
          imageSize: new AMap.Size(40, 40)
        })
      });

      const endMarker = new AMap.Marker({
        position: new AMap.LngLat(end.lng, end.lat),
        title: "终点",
        anchor: "bottom-center",
        icon: new AMap.Icon({
          size: new AMap.Size(40, 50),
          image: withBasePath("/image/map/end.svg"),
          imageSize: new AMap.Size(40, 50)
        })
      });

      map.add([startMarker, endMarker]);
    });
  }

  return (
    <div className="h-full w-full bg-[#02171C]">
      <div id="container-amp" className="h-full w-full bg-[#02171C]"></div>
    </div>
  );
}

export default MapContainer;
