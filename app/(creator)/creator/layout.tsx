import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";
import { Toaster } from 'sonner';

export default function CreatorRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex min-h-screen flex-col">
            <HeaderMain />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div>
    );
}
