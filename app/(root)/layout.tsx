
// 'use client';
import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Provider } from "react-redux";
import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ReduxProvider>
    <div className="flex min-h-screen flex-col">
      <HeaderUser placeholder="search products" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    // </ReduxProvider>
  );
}
