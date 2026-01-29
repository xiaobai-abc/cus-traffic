import localFont from "next/font/local";

export const youshe = localFont({
  src: [
    {
      path: "./youshe.ttf",
      weight: "400",
      style: "normal"
    }
  ],

  variable: "--font-youshe",
  display: "swap",
  preload: true
});

export const ali55 = localFont({
  src: [
    {
      path: "./ali55.ttf",
      weight: "400",
      style: "normal"
    }
  ],

  variable: "--font-ali",
  display: "swap",
  preload: true
});
export const pangmen = localFont({
  src: [
    {
      path: "./pangmen.ttf",
      weight: "400",
      style: "normal"
    }
  ],

  variable: "--font-pangmen",
  display: "swap",
  preload: true
});
