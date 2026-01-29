import { youshe, ali55, pangmen } from "@/fonts/index";
import HeaderRC from "./components/header";

const layoutBg = "#02171C";
//   "linear-gradient(180deg, rgba(16, 21, 32, 0.00) 0%, rgba(18, 21, 29, 0.77) 24.87%, #12151E 45.86%, rgba(17, 20, 29, 0.79) 74.71%, rgba(16, 21, 32, 0.00) 92.62%);url";

function DashboardLayout({ children }) {
  return (
    <main
      style={{
        background: layoutBg
      }}
      className={`w-screen h-screen overflow-hidden bd relative
       ${youshe.variable} ${ali55.variable} ${pangmen.variable}
        flex flex-col
      `}>
      <div className="h-full w-full flex items-center justify-center text-white ">
        admin map
      </div>
      {/* 两层叠在一起 */}
      <div className="absolute w-full h-full ">
        {/* header */}
        <HeaderRC></HeaderRC>

        {/* main */}
        {children}
      </div>
    </main>
  );
}

export default DashboardLayout;
