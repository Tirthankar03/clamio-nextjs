// src/app/(root)/layout.tsx
'use client';
import Footer from "@/components/shared/Footer";
import HeaderUser from "@/components/shared/Navbar/HeaderUser";
import { Provider } from 'react-redux';
import { store } from '@/Store/store';
import { Toaster } from 'sonner';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen flex-col">
        <HeaderUser />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </div>
    </Provider>
  );
}
