import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { AuthLayout } from "@/features/auth/components/auth-layout";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthLayout>
            <TRPCReactProvider>
              <TooltipProvider>
                {children}
                <Toaster />
              </TooltipProvider>
            </TRPCReactProvider>
          </AuthLayout>
          
      </body>
    </html>
  );
}
