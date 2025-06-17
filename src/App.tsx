import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function App({ children }: { children: React.ReactNode }) {

  return (
    <>
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
