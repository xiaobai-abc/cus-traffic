import "../styles/globals.css";

import ClientRunJS from "./client";

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-gray-950 overflow-hidden h-screen w-screen">
        {children}
        <ClientRunJS></ClientRunJS>
      </body>
    </html>
  );
}
