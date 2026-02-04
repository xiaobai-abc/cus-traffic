"use client";
import { useEffect, useRef } from "react";
import BlockRC from "../../components/block";
import PaSvg from "@/svgs/pa.svg";

function CongestionBlock() {
  return (
    <BlockRC
      title="拥堵数据"
      subtitle="Congestion Data"
      contentClassName="backdrop-blur-2xl"
    > 
      <div
        className="flex items-center justify-between py-3 px-3"
        style={{
          background: `linear-gradient(90deg, #052F39 12.53%, rgba(2, 23, 28, 0.00) 100%)`
        }}
      >
        <PaSvg></PaSvg>
        <span className="ml-1 mr-auto text-base text-[#38D9E3] leading-none">
          拥堵地点
        </span>
        <span className="text-white/70 text-xs leading-none">
          数据更新时间: 12:00:00
        </span>
      </div>
      <div className="flex items-center justify-between mx-3 py-3 border-b border-b-white/10">
        <div className="">
          <span className="text-[#88F8FF] text-base leading-none">
            某某街道-某某路段218号
          </span>
          <p className="text-sm text-white/70 leading-none mt-3">
            中国-浙江省-衢州市-龙游县
          </p>
        </div>
        <img
          className="w-[77px] h-[30px] cursor-pointer"
          src="/image/call.png"
          alt=""
        />
      </div>
      <div className="mx-3 py-4 space-y-5 border-b border-b-white/10">
        <TabItem title="实时拥堵等级" value="3级"></TabItem>
        <TabItem
          title="拥堵里程"
          value={<span className="text-[#FF5C5C]">2 Km</span>}
        ></TabItem>
        <TabItem title="平均车速" value="20 Km/h"></TabItem>
        <TabItem
          title="拥堵原因"
          value={<span className="text-[#F5E74F]">交通事故</span>}
        ></TabItem>
      </div>
      <div className="mx-3 py-4 flex items-start">
        <span className="text-white/70 text-sm leading-none font-ali mr-2">
          拥堵照片:
        </span>
        <div className="flex-[1_1_0%] w-0 overflow-hidden flex gap-2">
          <img src="/test/t1.png" alt="" />
          <img src="/test/t2.png" alt="" />
        </div>
      </div>
    </BlockRC>
  );
}

export default CongestionBlock;

function TabItem({ title, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/70 text-sm leading-none font-ali">
        {title}:
      </span>
      <span className="text-white text-sm leading-none font-ali">{value}</span>
    </div>
  );
}
