// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// Ubuntu font
import { ubuntu } from "@/fonts/ubuntu";

// Global styles
import "./globals.css";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Dev Notes",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} font-ubuntu`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container md:px-40 lg:px-64 pb-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
