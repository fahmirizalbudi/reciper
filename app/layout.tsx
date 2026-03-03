import { Google_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { TooltipProvider } from "@/components/ui/tooltip";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${google.className} antialiased`}
        suppressHydrationWarning
      >
        <TooltipProvider delayDuration={0}>
          <NextTopLoader color="#ff5e3a" showSpinner={false} />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
