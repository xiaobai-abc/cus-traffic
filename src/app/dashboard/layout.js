import { youshe, ali55, pangmen } from "@/fonts/index";
import HeaderRC from "./components/header";
// import MapContainer from "./ui/map/index";

const layoutBg = "#02171C";
//   "linear-gradient(180deg, rgba(16, 21, 32, 0.00) 0%, rgba(18, 21, 29, 0.77) 24.87%, #12151E 45.86%, rgba(17, 20, 29, 0.79) 74.71%, rgba(16, 21, 32, 0.00) 92.62%);url";

function DashboardLayout({ children }) {
  return (
    <main
      style={{
        background: layoutBg
      }}
      className={`w-screen h-screen overflow-hidden relative
       ${youshe.variable} ${ali55.variable} ${pangmen.variable}
      `}
    >
      {/* <MapContainer></MapContainer> */}

      {/* 中间加一层透光的 */}
      <div
        className="absolute w-screen h-screen op-0 left-0 right-0 bottom-0 pointer-events-none z-5"
        style={{
          background: `url('/image/layer.png') no-repeat`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center"
        }}
      ></div>

      <HeaderRC></HeaderRC>

      {children}
    </main>
  );
}

export default DashboardLayout;
