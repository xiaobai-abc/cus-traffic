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

      {/* 中上部分 */}
      <div
        className={cn(
          "absolute ml-[21vw] mr-[21vw] left-0 right-0 top-25",
          "flex justify-around z-11 px-10"
        )}
      >
        {(() => {
          const arr = [
            {
              title: "道路施工",
              value: 12.52
            },
            {
              title: "护航任务",
              value: 5612
            },
            {
              title: "赛会报章",
              value: 1234
            },
            {
              title: "非现场执法",
              value: 25
            }
          ];
          return (
            <>
              {arr.map((item, index) => (
                <div key={index} className="text-center">
                  <h5 className="text-white font-ali text-sm leading-none">
                    {item.title}
                  </h5>
                  <span className="text-[#F5E74F] text-3xl font-pangmen leading-none">
                    {item.value}
                  </span>
                </div>
              ))}
            </>
          );
        })()}
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
