import cn from "classnames";
import AlarmBlock from "./ui/left/alarm";
import CongestionBlock from "./ui/left/congestion";
import WeatherBlock from "./ui/left/weather";
import UnmannedBlock from "./ui/right/unmanned";

// main
function DashboardPage() {
  return (
    <div className={cn("h-full", "relative")}>
      {/* 因为中间要空出来 */}
      {/* 那就 左右定位布局把 */}

      {/* 左部分 */}
      <div
        className={cn(
          "absolute left-0 top-0 w-[21vw] min-w-[420px] h-full pl-8",
          "space-y-3 flex flex-col"
        )}
      >
        <AlarmBlock></AlarmBlock>
        <CongestionBlock></CongestionBlock>
        <WeatherBlock></WeatherBlock>
      </div>

      {/* 右部分 */}
      <div
        className={cn(
          "absolute right-0 top-0 w-[21vw] min-w-[420px] h-full pr-8",
          "space-y-3 flex flex-col"
        )}
      >
        <UnmannedBlock></UnmannedBlock>
      </div>
    </div>
  );
}

export default DashboardPage;
