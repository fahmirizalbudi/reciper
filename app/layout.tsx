import { Google_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const google = Google_Sans({
  variable: "--font-google",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${google.className} antialiased`}
      >
        <NextTopLoader color="#ff5e3a" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
