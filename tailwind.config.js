console.log("111");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",           // App Router 页面和组件
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",     // 自定义组件目录
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",            // 如果用了 src/ 目录
    // 如果有其他目录，比如 pages/ 或 lib/，也加进来
  ],
  theme: {
    extend: {
      colors: {
        primary: {}
      },
      fontSize: {},
      spacing: {
        // "vw-1": "1vw",
        // "vw-2": "2vw"
      }
    }
  },
  plugins: []
};
