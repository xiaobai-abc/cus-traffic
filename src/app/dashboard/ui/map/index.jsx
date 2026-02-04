"use client";
// import dynamic from "next/dynamic";
// import AMapLoader from '';
import { Component, useEffect, useState } from "react";
import { useAMap } from "./hook";

// 防止热更新重复加载
let isLoaded = false;
const instance = {
  map: null,
  AMap: null
};

function MapContainer() {
  //   const [AMapLoader, setAMapLoader] = useState(null);
  const { AMapLoader, AMapLoad } = useAMap();

  useEffect(() => {
    if (AMapLoader) {
      (async () => {
        console.log("init ---------------");
        if (isLoaded) return;
        const result = await AMapLoad().then((AMap) => {
          const map = new AMap.Map("container-amp", {
            zoom: 15,
            center: [119.171831, 29.02902],
            mapStyle: "amap://styles/4e0f3bb5e1252540cd872dc497c0e4e2"
          });
          isLoaded = true;
          instance.map = map;
          instance.AMap = AMap;
          return { AMap, map };
        });

        initAMap(result);
      })();
    }
  }, [AMapLoader]);

  function initAMap({ AMap, map }) {
    const toolBar = new AMap.ToolBar();
    map.addControl(toolBar);
    const scale = new AMap.Scale();
    map.addControl(scale);

    map.on("click", function (e) {
      console.log("click event --------", e);
    });

    const driving = new AMap.Driving({
      // map: map,
      // panel: "container-amp",
      ferry: 1,
      showTraffic: false, // 路况信息
      autoFitView: false
    });

    const points = [
      { keyword: "龙游县人民政府", city: "浙江衢州" }, //起始点坐标
      { keyword: "龙游交易城", city: "浙江衢州" } //终点坐标
    ];
    const points1 = [
      [119.17192591293622, 29.029077027763332],
      [119.16796554232792, 29.022708368386546]
    ];
    driving.search(...points1, function (status, result) {
      if (status === "complete") {
        //status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误

        console.log(result);
        const firstRoute = result.routes[0];
        // 获取整条路线的完整坐标数组（包含所有拐点）
        const allPathPoints = firstRoute.steps;

        {
          const rs = allPathPoints.map((item) => {
            const keys = ["lng", "lat"];
            // console.log(item.path);

            const a = item.path.map((i) => {
              return keys.map((key) => i[key]);
            });
            return a;
          });
          const vv = rs.flat();
          const lnglatArrs = vv.map((e) => new AMap.LngLat(...e));

          const customPolyline = new AMap.Polyline({
            path: lnglatArrs,
            strokeColor: "#4F7355", // 路线主色
            strokeWeight: 5, // 路线宽度
            strokeOpacity: 1, // 透明度
            strokeStyle: "solid", // 实线（可选 dashed 虚线 solid）
            isOutline: true,
            borderWeight: 1,
            outlineColor: "#FFEC1F",
            strokeLineJoin: "round" // 拐角圆角
            // showDir : true
          });
          map.add(customPolyline);

          // map.add(
          //   lnglatArrs.map((e) => {
          //     const marker = new AMap.Marker({
          //       position: e
          //     });
          //     marker.on("click", function (e) {
          //       console.log("marker clicked", e);
          //     });
          //     return marker;
          //   })
          // );
        }

        const start = ["lat", "lng"].map((key) => result.start.location[key]);
        const end = ["lat", "lng"].map((key) => result.end.location[key]);

        const startMarker = new AMap.Marker({
          position: new AMap.LngLat(...start.reverse()),
          title: "起点",
          anchor: "bottom-center",
          icon: new AMap.Icon({
            size: new AMap.Size(40, 40),
            image: "/image/map/start.svg",
            imageSize: new AMap.Size(40, 40)
          })
        });

        const endMarker = new AMap.Marker({
          position: new AMap.LngLat(...end.reverse()),
          title: "终点",
          anchor: "bottom-center",
          icon: new AMap.Icon({
            size: new AMap.Size(55, 60),
            image: "/image/map/end.svg",
            imageSize: new AMap.Size(55, 60)
          })
        });

        map.add([startMarker, endMarker]);
      } else {
        console.log("获取驾车数据失败：" + result);
      }
    });
  }

  return (
    <div className="h-full w-full bg-[#02171C]">
      <div id="container-amp" className="h-full w-full bg-[#02171C]"></div>
    </div>
  );
}

export default MapContainer;
