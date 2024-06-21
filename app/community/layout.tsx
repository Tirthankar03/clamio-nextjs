import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex min-h-screen flex-col">
      <HeaderMain />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
