"use client";
import { useEffect, useRef } from "react";
import BlockRC from "../../components/block";

function Weather() {
  return (
    <BlockRC
      title="天气数据"
      className="flex-1"
      subtitle="Weather Data"
      contentClassName="backdrop-blur-2xl flex-[1_1_0%] h-0 overflow-hidden pt-2"
    >
      <div className="h-full grid grid-cols-2 gap-x-4 items-start">
        <TableItem title="温度" value="16℃-6℃"></TableItem>
        <TableItem title="湿度" value="66%"></TableItem>
        <TableItem title="风向" value="东北阵风"></TableItem>
        <TableItem title="风速" value="2m/s"></TableItem>
        <TableItem title="能见度" value="17公里"></TableItem>
        <TableItem title="降水" value="0mm"></TableItem>
      </div>
    </BlockRC>
  );
}

export default Weather;

function TableItem({ title, value }) {
  return (
    <div className="flex justify-between bg-white/5 pr-2.5 items-center">
      <div className="text-center w-[64px] py-1.5 overflow-hidden relative leading-none">
        <div
          className=" absolute -left-2 -right-2 top-0 bottom-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(72, 156, 162, 0.3) 50%, #172B2E 50%)",
            backgroundSize: "10px 100%",
            transform: "skewX(339deg)"
          }}
        ></div>
        <span className="font-ali text-[#6BDCFF] text-sm leading-none relative z-1">
          {title}
        </span>
      </div>
      <span className="font-ali text-[#6BDCFF] text-sm leading-none">{value}</span>
    </div>
  );
}
