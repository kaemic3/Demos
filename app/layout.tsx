import '@radix-ui/themes/styles.css';
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Theme } from '@radix-ui/themes';
import { RouteChangeListener } from './route-change-listener';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Project Demos",
  description: "A place to check out demos of some of my projects.",
};
const inter = Inter({ 
  subsets: ['latin'] ,
  variable: '--font-inter',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RouteChangeListener />
      <body
        className={`${inter.variable} antialiased`}
      >
        <Theme accentColor="crimson" radius="small" appearance="dark">
          {/* Wrap the children in the main tag, so that we show the Navbar ontop! */}
          <main className="p-5">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
