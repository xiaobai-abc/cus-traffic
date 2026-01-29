import cn from "classnames";
import AlarmBlock from "./ui/left/alarm";
// main
function DashboardPage() {
  return (
    <div className={cn("h-full", "relative")}>
      {/* 因为中间要空出来 */}
      {/* 那就 左右定位布局把 */}

      {/* 左部分 */}
      <div className="absolute left-0 top-0 w-[21vw] min-w-[420px] h-full pl-8">
        <AlarmBlock></AlarmBlock>
      </div>
    </div>
  );
}

export default DashboardPage;
