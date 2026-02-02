"use client";
import BlockRC from "../../components/block";
import cn from "classnames";
import AUp from "@/svgs/aup.svg";
import ADown from "@/svgs/adown.svg";

function UnmannedBlock() {
  return (
    <BlockRC
      title="无人机统计"
      className=""
      subtitle="Unmanned Aerial Vehicle Statistics"
      contentClassName="backdrop-blur-2xl"
    >
      <div
        className="h-full relative pt-6 px-3 pb-2"
        style={{
          background: `url("/image/u/u-t.png"),url("/image/u/u-bg.png")`,
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundPosition: "center top",
          backgroundSize : "auto , 100% 100%"
        }}
      >
        {/* 中间一整个行 */}
        <div className="grid grid-cols-[1fr_auto_1fr] pt-2 gap-x-2">
          <div className=" -translate-y-2">
            <div className="flex">
              <span className="text-base text-white leading-none -translate-y-2">
                今日
              </span>
              <Deformation></Deformation>
            </div>
            <div className="flex items-center border-t border-dashed border-t-white/40 pt-1 mt-2.5 justify-between">
              <span className="text-white/70 text-xs whitespace-nowrap">同比</span>
              <span className="text-xs text-white">23.2%</span>
              <AUp className="mr-0.5"></AUp>
              <span className="text-white/70 text-xs whitespace-nowrap">环比</span>
              <span className="text-xs text-white">23.2%</span>
              <ADown></ADown>
            </div>
          </div>
          <div className="">
            <img src="/image/u/u-m.png" alt="" />
          </div>
          <div className="-translate-y-2">
            <div className="flex">
              <Deformation1></Deformation1>
              <span className="text-base text-white leading-none -translate-y-2">
                本月
              </span>
            </div>
            <div className="flex items-center border-t border-dashed border-t-white/40 pt-1 mt-2.5 justify-between">
              <span className="text-white/70 text-xs whitespace-nowrap">同比</span>
              <span className="text-xs text-white">23.2%</span>
              <AUp className="mr-0.5"></AUp>
              <span className="text-white/70 text-xs whitespace-nowrap">环比</span>
              <span className="text-xs text-white">23.2%</span>
              <ADown></ADown>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div className="flex">
          <div
            className="pl-3.5 py-4 flex items-center flex-1"
            style={{
              background: `url("/image/u/u-line.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <img className="mr-2" src="/image/u/u-i.svg" alt="" />
            <span className="font-ali text-white text-sm ml-0 mr-5">
              在线设备
            </span>
            <span className="font-ali text-white font-bold mr-0.5">20</span>
            <span className="text-white/70 text-sm leading-none">%</span>
          </div>
          <div
            className="pr-3.5 py-4 flex items-center flex-1 justify-end"
            style={{
              background: `url("/image/u/u-line-h.svg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <img className="mr-2" src="/image/u/u-i.svg" alt="" />
            <span className="font-ali text-white text-sm">累计飞行</span>
            <span className="font-ali text-white font-bold ml-5 mr-0.5">120</span>
            <span className="text-white/70 text-sm leading-none">h</span>
          </div>
        </div>
      </div>
    </BlockRC>
  );
}

export default UnmannedBlock;

// 变形

function Deformation() {
  return (
    <div className=" relative flex-1 pt-3 mr-4 h-fit">
      <p className="flex justify-center">
        <span className="font-c1">210</span>
        <span className="font-c2 pt-[5px]">次</span>
      </p>
      <div
        className={cn(
          "h-6 w-17 absolute top-0 right-4",
          "border-t border-r border-t-white/30 border-r-white/30"
        )}
        style={{
          transform: "skewX(40deg)"
        }}
      ></div>
      <i
        style={{
          boxShadow: "0 0 5px 1px #1FC6FF",
          right: "4px",
          top: "18px"
        }}
        className=" absolute w-[6px] h-[6px] bg-[#1FC6FF] rounded-[50%]"
      ></i>
    </div>
  );
}
function Deformation1() {
  return (
    <div className=" relative flex-1 pt-3 ml-4 h-fit">
      <p className="flex justify-center">
        <span className="font-c1">210</span>
        <span className="font-c2 pt-[5px]">次</span>
      </p>
      <div
        className={cn(
          "h-6 w-17 absolute top-0 right-4",
          "border-t border-l border-t-white/30 border-l-white/30"
        )}
        style={{
          transform: "skewX(320deg)"
        }}
      ></div>
      <i
        style={{
          boxShadow: "0 0 5px 1px #1FC6FF",
          left: "0px",
          top: "18px"
        }}
        className=" absolute w-[6px] h-[6px] bg-[#1FC6FF] rounded-[50%]"
      ></i>
    </div>
  );
}
