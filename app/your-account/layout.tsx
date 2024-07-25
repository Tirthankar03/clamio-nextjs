import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import BottomNavigation from "@/components/Reusable Components/BottomNavigation"; // Import the BottomNavigation component
import HeaderDashboard from "@/components/shared/Dashboard/HeaderDashboard";
import SideNavbar from "@/components/shared/Dashboard/SideNavbar";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import Sidebar from "@/components/shared/Sidebar";
import Footer from "@/components/shared/Footer";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <HeaderUser placeholder="search products" />
      <div className="bg-zinc-100">
             <div
          className={cn(
            "min-h-screen max-w-7xl mx-auto  text-black flex ",
            inter.className,
            { "debug-screens": process.env.NODE_ENV === "development" }
          )}
        >
          <Sidebar />
          <div className="md:p-8 mt-8 w-full mb-16">
            {children}
          </div>

        </div>
      </div>
   
        <div className="mt-10">
          <BottomNavigation />
        </div>
        <Footer/>
      </body>
    </html>
  );
}
