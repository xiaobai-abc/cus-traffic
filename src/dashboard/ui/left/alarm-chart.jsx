"use client";

import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { GraphicComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { withBasePath } from "@/lib/base-path";

echarts.use([GraphicComponent, PieChart, CanvasRenderer]);

const option = {
  graphic: {
    elements: [
      {
        type: "image",
        left: "center",
        top: "center",
        style: { image: withBasePath("/image/ud.png"), width: 42, height: 42 }
      }
    ]
  },
  series: [
    {
      type: "pie",
      radius: ["67%", "75%"],
      padAngle: 2,
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
      padAngle: 2,
      itemStyle: { borderRadius: 0 },
      label: { show: false },
      data: [
        { value: 30, itemStyle: { color: "rgba(221,186,85,0.3)" } },
        { value: 20, itemStyle: { color: "rgba(23,183,212,0.3)" } },
        { value: 40, itemStyle: { color: "rgba(58,144,233,0.3)" } },
        { value: 10, itemStyle: { color: "rgba(83,114,224,0.3)" } }
      ]
    },
    {
      type: "pie",
      radius: ["40%", "44%"],
      silent: true,
      itemStyle: { color: "#032026" },
      data: [1]
    }
  ]
};

function AlarmChart() {
  const chartDom = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    let timeoutId = null;
    let idleId = null;

    const initChart = () => {
      if (!chartDom.current) return;
      const chart =
        echarts.getInstanceByDom(chartDom.current) ||
        echarts.init(chartDom.current);
      chart.setOption(option);
      chartRef.current = chart;
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(initChart, { timeout: 800 });
    } else {
      timeoutId = window.setTimeout(initChart, 80);
    }

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      chartRef.current?.dispose();
    };
  }, []);

  return <div className="w-[150px] h-[170px]" ref={chartDom}></div>;
}

export default AlarmChart;
