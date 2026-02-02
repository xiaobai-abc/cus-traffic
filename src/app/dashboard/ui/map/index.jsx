"use client";
import dynamic from "next/dynamic";
// import AMapLoader from '';
import { Component, useEffect, useState } from "react";
import { useAMap } from "./hook";

function MapContainer() {
  //   const [AMapLoader, setAMapLoader] = useState(null);
  const { AMapLoader, AMapLoad } = useAMap();
  const [mapEX, setMapEX] = useState(null);
  const [AMapEX, setAMapEX] = useState(null);

  useEffect(() => {
    if (AMapLoader) {
      AMapLoad().then((AMap) => {
        console.log("init");
        const map = new AMap.Map("container-amp", {
          zoom: 15,
          center: [119.171831, 29.02902],
          mapStyle: "amap://styles/4e0f3bb5e1252540cd872dc497c0e4e2"
        });

        setMapEX(map);
        setAMapEX(AMap);

        const toolBar = new AMap.ToolBar();
        map.addControl(toolBar);
      });
    }
  }, [AMapLoader]);

  useEffect(() => {
    if (mapEX) {
      // TODO: 添加路线
      mapEX.on("click", function (e) {
        console.log(e);
      });

      const driving = new AMapEX.Driving({
        map: mapEX,
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
        } else {
          console.log("获取驾车数据失败：" + result);
        }
      });
    }
  }, [mapEX]);

  return (
    <div className="h-full w-full">
      <div id="container-amp" className="h-full w-full"></div>
    </div>
  );
}

export default MapContainer;
