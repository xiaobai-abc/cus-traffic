"use client";
import { useEffect ,useMemo} from "react";
import BlockRC from "../../components/block";

function MotorcycleBlock() {
  /**
   * @param {number | string} 数值
   * @returns 拆分成数组 按照长度生成 不足补0
   */
  function numToArr(num = 0, len = 5) {
    const v = String(num);
    return ("00000".slice(0, len - v.length) + v).split("");
  }

  

  return (
    <BlockRC
      title="铁骑数据统计"
      subtitle="Motorcycle Statistics"
      contentClassName="backdrop-blur-2xl px-2 mb-2"
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-white/70 leading-none whitespace-nowrap">处理事件总数</span>
        <div className="flex items-center space-x-4">
          {numToArr(1234).map((item, index) => (
            <NumBlock key={index} num={item} />
          ))}
        </div>
        <span className="text-sm text-white/70 leading-none mr-2">起</span>
      </div>
      <div className="flex items-center mb-6">
        <i className="text-[#3BE3ED] mr-1.5">•</i>
        <span className="text-[#B0EBFF]/80 text-sm font-ali leading-none whitespace-nowrap">
          在线数量/总数
        </span>
        <TechProgressBar></TechProgressBar>
        <span className="font-ali text-[#B0EBFF] text-sm leading-none">
          197
        </span>
        <span className="font-ali text-[rgba(224,238,254,0.50)] text-sm leading-none mx-1">
          /
        </span>
        <span className="font-ali text-[rgba(176,235,255,0.50)] text-sm leading-none">
          1000
        </span>
        <span className="font-ali text-white/30 text-sm leading-none ml-4">
          起
        </span>
      </div>
      <div className="flex items-center mb-2">
        <i className="text-[#3BE3ED] mr-1.5">•</i>
        <span className="text-[#B0EBFF]/80 text-sm font-ali leading-none whitespace-nowrap">
          相应速度/总数
        </span>
        <TechProgressBar t="2"></TechProgressBar>
        <span className="font-ali text-[#B0EBFF] text-sm leading-none">
          197
        </span>
        <span className="font-ali text-[rgba(224,238,254,0.50)] text-sm leading-none mx-1">
          /
        </span>
        <span className="font-ali text-[rgba(176,235,255,0.50)] text-sm leading-none">
          1000
        </span>
        <span className="font-ali text-white/30 text-sm leading-none ml-4">
         分钟
        </span>
      </div>
    </BlockRC>
  );
}

export default MotorcycleBlock;

function NumBlock({ num }) {
  return (
    <div
      style={{
        background: `url("/image/num-bg.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center"
      }}
      className="w-[38px] h-[50px] flex items-center justify-center"
    >
      <span
        style={{
          textShadow: "0 4px 6px rgba(113, 155, 180, 0.51)",
          fontSize: "28px"
        }}
        className="font-ali leading-none text-[#D6E9FF]"
      >
        {num ?? 0}
      </span>
    </div>
  );
}

const TechProgressBar = ({ progress = 60, t = 1 }) => {
  return (
    <div className="flex-1 flex items-center bg-transparent mx-1.5">
      <div className="relative w-full h-[2px] bg-white/10 flex items-center">
        {/* from-transparent via-cyan-500/50 to-cyan-400  */}
        <div
          className="absolute left-0 h-full bg-linear-to-r "
          style={{
            width: `${progress}%`,
            background:
              t == 1
                ? "linear-gradient(270deg, #3BE3ED 0%, #02171C 100%)"
                : "linear-gradient(270deg, #5DB6FF 3.61%, #02171C 100%)"
          }}
        >
          <div className="absolute inset-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        </div>

        <div
          className="absolute flex items-center justify-center -translate-x-1/2"
          style={{ left: `${progress}%` }}
        >
          <div className="absolute w-4 h-4 rounded-full bg-cyan-500/30 blur-[2px]" />
          {/* backgroundColor: t == 1 ? "#3ADEE8" : "#5DB6FF" */}
          <div
            style={{
              border: `2px solid ${t == 1 ? "#3ADEE8" : "#5DB6FF"}`
            }}
            className="relative w-3 h-3 rounded-full bd border-2 "
          >
            <div
              style={{
                backgroundColor: t == 1 ? "#3ADEE8" : "#5DB6FF",
                boxShadow: `0 0 1px 1px ${t == 1 ? "#3ADEE8" : "#5DB6FF"}`
              }}
              className="absolute inset-[2px] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
