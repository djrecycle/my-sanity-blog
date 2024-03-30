import "./globals.css";
import { Inter } from "next/font/google";
// import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { draftMode } from "next/headers";
import LiveVisualEditing from "@/components/client/LiveVisualEditing";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {draftMode().isEnabled && <LiveVisualEditing />}
        </ThemeProvider>
      </body>
    </html>
  );
}
