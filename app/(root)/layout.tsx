import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex min-h-screen flex-col">
      <HeaderUser />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
