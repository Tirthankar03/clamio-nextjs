import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import BottomNavigation from "@/components/Reusable Components/BottomNavigation"; // Import the BottomNavigation component
import HeaderDashboard from "@/components/shared/Dashboard/HeaderDashboard";
import SideNavbar from "@/components/shared/Dashboard/SideNavbar";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderDashboard />
        <div
          className={cn(
            "min-h-screen w-full bg-white text-black flex ",
            inter.className,
            { "debug-screens": process.env.NODE_ENV === "development" }
          )}
        >
          <SideNavbar />
          <div className="md:p-8 w-full mb-16">
            {children}
          </div>

        </div>
        <div className="mt-10">
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
