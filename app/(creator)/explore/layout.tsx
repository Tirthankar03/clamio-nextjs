import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";
import { store } from "@/Store/store";
import ReduxProvider from "@/utils/ReduxProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ReduxProvider>
      <div className=" flex min-h-screen flex-col">
        <HeaderMain />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    // </ReduxProvider>
  );
}
