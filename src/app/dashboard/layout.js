import localFont from "next/font/local";
import HeaderRC from "./Header";

const alibabaPuHui = localFont({
  src: [
    {
      path: "../../../public/font/youshe.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-youshe-biaoti",
  display: "swap",
  preload: true
});

const layoutBg = "#080808";
//   "linear-gradient(180deg, rgba(16, 21, 32, 0.00) 0%, rgba(18, 21, 29, 0.77) 24.87%, #12151E 45.86%, rgba(17, 20, 29, 0.79) 74.71%, rgba(16, 21, 32, 0.00) 92.62%);url";

function DashboardLayout({ children }) {
  return (
    <main
      style={{
        background: layoutBg
      }}
      className="border border-blue-400 w-screen h-screen overflow-hidden ">
      {/* header */}
      <HeaderRC></HeaderRC>
      {/* main */}

      {children}

      {/* footer 没有*/}
    </main>
  );
}

export default DashboardLayout;
