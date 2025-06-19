import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
// import Buttons from './components/Buttons';
import { ModeToggle } from "@/components/mode-toggle"
import DashboardCards from './components/dashboard-cards';
export default function App({ children }: { children: React.ReactNode }) {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">   
      <SidebarProvider>
      <AppSidebar />
       <div className="absolute top-4 right-4 z-50">
          <ModeToggle />
        </div>
      <main>
        <SidebarTrigger  />
        {children}
        <DashboardCards />
      </main>
    </SidebarProvider>

    </ThemeProvider>
    </>
  )
}
