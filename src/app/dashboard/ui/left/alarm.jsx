import BlockRC from "../../components/block";
import cn from "classnames";
import AlarmChart from "./alarm-chart";

function AlarmBlock() {
  return (
    <BlockRC
      title="接警数据"
      subtitle="Alarm Response Data"
      contentClassName="backdrop-blur-2xl pb-3 pr-2 pt-1">
      {/* echart */}
      <div className="flex">
        <AlarmChart></AlarmChart>
        <div className="flex-1 ml-4 grid grid-cols-2 grid-rows-2 gap-5.5 pb-6 pt-2">
          {[
            { title: "交通堵塞", color: "#3BE3ED" },
            { title: "交通事故", color: "#1FC6FF" },
            { title: "车辆故障", color: "#21efbe" },
            { title: "异常天气", color: "#F5E74F" }
          ].map((e, index) => {
            return (
              <div className="flex" key={index}>
                <i
                  className="h-full w-0.5 mr-1.5"
                  style={{
                    background: `linear-gradient(180deg,${e.color} 0%, ${e.color} 20%, rgba(255, 255, 255, 0.2) 0%)`
                  }}></i>
                <div className="h-full flex flex-col justify-between">
                  <span className="text-white font-ali text-base leading-none">
                    {e.title}
                  </span>
                  <span
                    style={{
                      color: e.color
                    }}
                    className={cn("font-ali text-[22px] leading-none")}>
                    {21}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-center w-[150px] -translate-y-2">
          <span className="font-ali-85 text-[#3BE3ED] text-2xl leading-none font-bold">
            8888
          </span>
          <p className="text-sm text-white/70 leading-none mt-1.5">
            接警总数(条)
          </p>
        </div>

        <img
          className="w-[160px] h-[40px] cursor-pointer"
          src="/image/start.svg"
          alt=""
        />
      </div>
    </BlockRC>
  );
}

export default AlarmBlock;
