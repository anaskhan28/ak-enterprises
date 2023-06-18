import Head from 'next/head';
import './globals.scss';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Nav from '@/components/nav/nav';
import Footer from '@/components/footer/Footer';

const OpenSans = Open_Sans({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata = {
  title: 'AK Enterprises',
  description: 'Solution for all your scrap',
  // Add more metadata properties as needed
};

export default function RootLayout({ children }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${OpenSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <link rel='icon' href='./favicon.ico'/>
      </Head>
      <html lang="en">
        <body className={OpenSans.className}>
          <Nav/>
          {children}
          <Footer/>
        </body>
      </html>
    </>
  );
}
