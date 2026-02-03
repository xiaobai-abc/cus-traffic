const { useState, useEffect } = require("react");

// const ThirdPartyPackage = dynamic(() => import("@amap/amap-jsapi-loader"), {
//   ssr: false
// });

function useAMap() {
  const [AMapLoader, setAMapLoader] = useState(null);

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "79b11f3c6c2433f3a9e50e240432a005"
    };
    LoadClientPackage().then((AMapLoader) => {
      setAMapLoader(AMapLoader);
    });
  }, []);

  function AMapLoad() {
    return AMapLoader.load({
      key: "070788fed9d2e9cc46b2df0b5b9dfd7a",
      version: "2.0",
      plugins: ["AMap.Scale", "AMap.ToolBar","AMap.Driving","AMap.Polyline","AMap.Marker"],
      viewMode: "2D"
    });
  }

  return {
    AMapLoader,
    setAMapLoader,
    AMapLoad
  };
}

async function LoadClientPackage() {
  const module = await import("@amap/amap-jsapi-loader");
  return module.default;
}

export { useAMap };
