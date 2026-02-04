import {} from "react";
import cn from "classnames";
import TimeBlock from "./time";
import UserBlock from "./user";

function HeaderRC() {
  return (
    <header
      className={cn(
        "h-15",
        "flex items-center justify-between mx-2 absolute top-0 left-0 right-0 z-10"
      )}
      style={{
        background: "url('/image/header-bg.png') no-repeat",
        backgroundSize: "100% 100%"
      }}
    >
      <TimeBlock></TimeBlock>
      <h2 className="font-ali text-white text-2xl tracking-[2px]">交通数据可视化平台</h2>
      <UserBlock></UserBlock>
    </header>
  );
}

export default HeaderRC;
