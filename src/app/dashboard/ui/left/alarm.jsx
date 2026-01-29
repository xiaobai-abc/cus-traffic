"use client";
import { useEffect, useRef } from "react";
import BlockRC from "../../components/block";
import * as echarts from "echarts";

const option = {
  graphic: {
    // 中间图标
    elements: [
      {
        type: "image",
        left: "center",
        top: "center",
        style: { image: "/image/ud.png", width: 42, height: 42 }
      }
    ]
  },
  series: [
    // 外层装饰虚线圈
    // {
    //   type: 'gauge',
    //   radius: '85%',
    //   splitNumber: 40,
    //   axisLine: { show: false },
    //   splitLine: { length: 4, lineStyle: { color: 'rgba(255,255,255,0.2)', width: 2 } },
    //   axisTick: { show: false }, axisLabel: { show: false }
    // },
    // 核心配色环
    {
      type: "pie",
      radius: ["67%", "75%"],
      padAngle: 2, // 间隙
      itemStyle: { borderRadius: 0 },
      label: { show: false },
      data: [
        { value: 30, itemStyle: { color: "#DDBA55" } },
        { value: 20, itemStyle: { color: "#17B7D4" } },
        { value: 40, itemStyle: { color: "#3A90E9" } },
        { value: 10, itemStyle: { color: "#5372e0" } }
      ]
    },
    {
      type: "pie",
      radius: ["54%", "75%"],
      padAngle: 2, // 间隙
      itemStyle: { borderRadius: 0 },
      label: { show: false },
      data: [
        { value: 30, itemStyle: { color: "rgba(221,186,85,0.3)" } },
        { value: 20, itemStyle: { color: "rgba(23,183,212,0.3)" } },
        { value: 40, itemStyle: { color: "rgba(58,144,233,0.3)" } },
        { value: 10, itemStyle: { color: "rgba(83,114,224,0.3)" } }
      ]
    },
    // 内层阴影环
    {
      type: "pie",
      radius: ["40%", "44%"],
      silent: true,
      itemStyle: { color: "#032026" },
      data: [1]
    }
  ]
};

function AlarmBlock() {
  const chartDom = useRef();
  useEffect(() => {
    if (chartDom.current) {
      const chart =
        echarts.getInstanceByDom(chartDom.current) ||
        echarts.init(chartDom.current);
      chart.setOption(option);
    }
  }, []);

  return (
    <BlockRC
      title="接警数据"
      subtitle="Alarm Response Data"
      contentClassName="backdrop-blur-2xl pb-3 pr-2 pt-1"
    >
      {/* echart */}
      <div className="flex">
        <div className="w-[150px] h-[170px]" ref={chartDom}></div>
        <div className="flex-1 ml-4 grid grid-cols-2 grid-rows-2 gap-5.5 pb-6 pt-2">
          {["交通堵塞", "交通事故", "车辆故障", "异常天气"].map((e, index) => {
            return (
              <div className="flex" key={index}>
                <i
                  className="h-full bg-red-400 w-0.5 mr-1.5"
                  style={{
                    background: `linear-gradient(180deg,#3BE3ED 0%, #3BE3ED 20%, rgba(255, 255, 255, 0.2) 0%)`
                  }}
                ></i>
                <div className="h-full flex flex-col justify-between">
                  <span className="text-white font-ali text-base leading-none">
                    {e}
                  </span>
                  <span className="text-[#3BE3ED] font-ali text-[22px] leading-none">
                    {21}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-center w-[150px]">
          <span className="font-ali text-[#3BE3ED] text-2xl leading-none">
            8888
          </span>
          <p className="text-sm text-white/70 leading-none mt-1.5">
            接警总数(条)
          </p>
        </div>

        <img
          className="w-[160px] h-[40px] cursor-pointer"
          src="/image/start.png"
          alt=""
        />
      </div>
    </BlockRC>
  );
}

export default AlarmBlock;
