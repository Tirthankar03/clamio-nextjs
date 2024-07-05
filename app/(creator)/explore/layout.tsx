'use client'
import Footer from "@/components/shared/Footer";
import HeaderMain from "@/components/shared/HeaderMain";
import { store } from "@/Store/store";
import { Provider } from "react-redux";
import { Toaster } from 'sonner';
export default function CreatorRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>

           <div className=" flex min-h-screen flex-col">
            <HeaderMain />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
        </div> 
        </Provider>
        
    );
}
