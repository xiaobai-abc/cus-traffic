"use client";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useDashboardStore } from "@/stores/dashboard";

function TimeBlock() {
  const { time, setTime } = useDashboardStore();
  // 更新时间
  useEffect(() => {
    setTime()
    // TODO 之后打开
    // const interval = setInterval(() => {
    //   setTime();
    // }, 999);
    // setTime();
    // return () => clearInterval(interval);
  }, []);

  return <div className="text-[#1FC6FF] pl-11 w-75 text-base">{time}</div>;
}

export default TimeBlock;
