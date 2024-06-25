
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import SideNavbar from "@/components/Dashboard/SideNavbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
        <SideNavbar/>

        {/* main page */}
        <div  className="p-8 w-full">{children}</div>
        
      </body>
    </html>
  );
}
