import Footer from "@/components/shared/Footer";
import HeaderFollowers from "@/components/shared/Followers/HeaderFollowers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex min-h-screen flex-col">
            <HeaderFollowers />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}