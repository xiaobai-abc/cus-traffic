"use client";
import BlockRC from "../../components/block";
import M1Svg from "@/svgs/m1.svg";
import M2Svg from "@/svgs/m2.svg";

function MonitoringBlock() {
  return (
    <BlockRC
      title="监控统计"
      className="flex-[1_1_0%] h-0 flex flex-col"
      subtitle="Monitoring Statistics"
      contentClassName="backdrop-blur-2xl flex-[1_1_0%] h-0 flex flex-col px-2 pb-2"
    >
      <div className="flex gap-x-2.5 mb-1.5">
        <div
          style={{
            background: `url("/image/border.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
          className="flex items-center py-2.5 px-3 justify-between flex-1"
        >
          <M1Svg></M1Svg>
          <span className="text-[#B4C0CC] font-ali text-sm leading-none">
            设备在线率
          </span>
          <span className="text-base text-white leading-none font-ali">
            75%
          </span>
        </div>
        <div
          style={{
            background: `url("/image/border.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
          className="flex items-center py-2.5 px-3 justify-between flex-1"
        >
          <M2Svg></M2Svg>
          <span className="text-[#B4C0CC] font-ali text-sm leading-none">
            监控覆盖率
          </span>
          <span className="text-base text-white leading-none font-ali">
            75%
          </span>
        </div>
      </div>
      <div className="overflow-hidden flex-[1_1_0%] h-0">
        <table className="w-full border-collapse border-spacing-0">
          <colgroup>
            <col className="w-[80px]" />
            <col className="w-[100px]" />
            <col className="w-[100px]" />
            <col className="flex-1" />
          </colgroup>
          <thead className="sticky top-0 text-white/70 bg-[#18333A] font-ali text-sm text-center">
            <tr>
              <th className="py-2">序号</th>
              <th>设备名称</th>
              <th>视频类型</th>
              <th>上报时间</th>
            </tr>
          </thead>
          <tbody className="text-sm text text-white font-ali text-center leading-none h-fit">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <tr className="even:bg-white/8" key={index}>
                  <td className="py-3.5">01</td>
                  <td className="py-3.5">v01</td>
                  <td className="py-3.5">天气</td>
                  <td className="py-3.5">12:00:01</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </BlockRC>
  );
}

export default MonitoringBlock;
