import { ali55, pangmen, ali85 } from "@/fonts/index";
import HeaderRC from "./components/header";
import MapEntry from "./ui/map/map-entry";

//   "linear-gradient(180deg, rgba(16, 21, 32, 0.00) 0%, rgba(18, 21, 29, 0.77) 24.87%, #12151E 45.86%, rgba(17, 20, 29, 0.79) 74.71%, rgba(16, 21, 32, 0.00) 92.62%);url";

function DashboardLayout({ children }) {
  return (
    <main
      style={{
        background: "#02171C"
      }}
      className={`w-screen h-screen overflow-hidden relative
       ${ali55.variable} ${pangmen.variable} ${ali85.variable}
      `}>
      <MapEntry></MapEntry>

      {/* 中间加一层透光的 */}
      <div
        className="absolute w-screen h-screen op-0 left-0 right-0 bottom-0 pointer-events-none z-5"
        style={{
          // background: `url('/image/layer.png') no-repeat`,
          // backgroundSize: "100% 100%",
          // backgroundPosition: "center"
          background: "linear-gradient(178deg, rgba(2, 23, 28, 0.00) 79.31%, rgba(2, 23, 28, 0.60) 93.59%), linear-gradient(90deg, rgba(2, 23, 28, 0.00) 72.35%, rgba(2, 23, 28, 0.63) 82.75%, #02171C 93.47%), linear-gradient(270deg, rgba(2, 23, 28, 0.00) 72%, rgba(2, 23, 28, 0.63) 83%, #02171C 93%), linear-gradient(358deg, rgba(2, 23, 28, 0.00) 67.44%, rgba(2, 23, 28, 0.81) 83.82%, #02171C 93.76%)"
        }}></div>

      <HeaderRC></HeaderRC>

      {children}
    </main>
  );
}

export default DashboardLayout;
