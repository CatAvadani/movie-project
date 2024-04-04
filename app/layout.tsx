import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from './components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'A simple movie app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Head>
          <title>Movie App</title>
          <Link rel='icon' href='/favicon.ico' />
        </Head>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
