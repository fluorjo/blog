import Providers from '@/components/Providers';
import Footer from '@/components/layout/blogLayout/_components/Footer';
import Header from '@/components/layout/blogLayout/_components/Header';
import Sidebar from '@/components/layout/blogLayout/_components/Sidebar';
import { cn } from '@/utils/style';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Fluorjo',
    description: 'Fluorjo',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <Providers>
                    <div
                        className={cn(
                            'flex h-screen w-screen text-sm lg:text-base',
                            inter.className,
                        )}
                    >
                        <Sidebar />
                        <div className="flex flex-1 flex-col">
                            <Header />
                            <div className="flex flex-1 flex-col overflow-y-auto">
                                <main className="flex-1">{children}</main>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
