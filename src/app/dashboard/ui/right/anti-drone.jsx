"use client";

import BlockRC from "../../components/block";
import ABg from "@/assets/a-b.png";

function AntiDroneBlock() {
  return (
    <BlockRC
      title="反无人机统计"
      subtitle="Anti-Drone Statistics"
      contentClassName="backdrop-blur-2xl py-4 px-4"
    >
      <div className=" relative">
        <div className="flex items-center">
          <div className="flex-1 space-y-3.5 mr-3.5">
            <Bc title="设备总数" v={1112}></Bc>
            <Bc title="在线数量" v={1112}></Bc>
            <Bc title="离线数量" v={1112}></Bc>
          </div>
          <div className="w-[224px] h-[107px] ">
            <img src={ABg.src} alt="" />
          </div>
          <div className="flex-1 space-y-3.5 ml-3.5">
            <Bc title="任务总数" v={1112}></Bc>
            <Bc title="告警数量" v={1112}></Bc>
            <Bc title="处置数量" v={1112}></Bc>
          </div>
        </div>
        <span
          style={{
            background: "linear-gradient(180deg, #FFF 0%, #1FC6FF 139.13%)",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
          }}
          className=" absolute text-[18px] font-ali font-bold top-11 left-1/2 -translate-x-1/2 "
        >
          98%
        </span>
        <span className=" absolute bottom-0 left-1/2 text-white/70 font-ali text-sm -translate-x-1/2">设备在线率</span>
      </div>
    </BlockRC>
  );
}

function Bc({ title = "标题", v = "0" }) {
  return (
    <div className="text-right">
      <h6 className="text-[rgba(176,235,255,0.60)] text-sm font-ali leading-none mb-0.5 whitespace-nowrap">
        {title}
      </h6>
      <span className="text-base font-ali text-[#9DE6FF] font-bold leading-none">
        {v}
      </span>
    </div>
  );
}

export default AntiDroneBlock;
