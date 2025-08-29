import type { Metadata } from 'next'
import "./globals.css";

import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'NinoEdu - Jogos',
  description: 'Baixe os jogos do NinoEdu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SidebarProvider
          defaultOpen={false}
        >
          <AppSidebar/>
            <main className="w-full">
              <header className="bg-linear-to-tl from-sky-500 to-blue-800 h-18 flex items-center px-6 justify-between">
                <SidebarTrigger 
                size="icon"
                className="text-white"/>
                <Image src="/nino_white.svg" alt="Logo do NinoEdu" width={60} height={60}/>
              </header>

              {children}
            </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
