import cn from "classnames";
import AlarmBlock from "./ui/left/alarm";
import CongestionBlock from "./ui/left/congestion";
import WeatherBlock from "./ui/left/weather";
import UnmannedBlock from "./ui/right/unmanned";
import MotorcycleBlock from "./ui/right/motorcycle";
import AntiDroneBlock from "./ui/right/anti-drone";
import MonitoringBlock from "./ui/right/monitoring";

// main
function DashboardPage() {
  return (
    <>
      {/* 左部分 */}
      <div
        className={cn(
          "absolute left-0 top-0 w-[21vw] min-w-[420px] h-screen pl-8",
          "space-y-3",
          "pt-16 z-10"
        )}
      >
        <div className="h-full w-full flex flex-col">
          <AlarmBlock></AlarmBlock>
          <CongestionBlock></CongestionBlock>
          <WeatherBlock></WeatherBlock>
        </div>
      </div>

      {/* 右部分 */}
      <div
        className={cn(
          "absolute right-0 top-0 w-[21vw] min-w-[420px] h-screen pr-8",
          "space-y-3",
          "pt-16 z-10"
        )}
      >
        <div className="h-full w-full flex flex-col">
          <UnmannedBlock></UnmannedBlock>
          <MotorcycleBlock></MotorcycleBlock>
          <AntiDroneBlock></AntiDroneBlock>
          <MonitoringBlock></MonitoringBlock>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
