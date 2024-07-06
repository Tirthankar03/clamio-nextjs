import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/utils/ReduxProvider";
import { Toaster, toast } from 'sonner'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Clamio",
  description: "Sell All your digital products now. Become a clamio creator!",
  icons: {
    icon: "/assests/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={poppins.variable}>{children}</body>
      </ReduxProvider>
      <Toaster richColors={true}/>
      
    </html>
  );
}
