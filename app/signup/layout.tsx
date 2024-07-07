'use client'
import { store } from "@/Store/store";
import { Provider } from "react-redux";

export default function CreatorRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" flex min-h-screen flex-col">
            <Provider store={store} >


            
            <main className="flex-1">{children}</main>
            </Provider>
        </div>
    );
}
