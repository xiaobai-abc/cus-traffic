import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-gray-950 overflow-hidden h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
