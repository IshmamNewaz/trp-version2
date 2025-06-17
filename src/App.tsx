import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import Buttons from './components/Buttons';

export default function App({ children }: { children: React.ReactNode }) {

  return (
    <>
      <Buttons />
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">    
          
          {children}
        </ThemeProvider>
        
      </main>
    </SidebarProvider>
    
    </>
  )
}
