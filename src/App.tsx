import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
// import Buttons from './components/Buttons';
import { ModeToggle } from "@/components/mode-toggle"
import DashboardCards from './components/dashboard-cards';
import { ChartBarLabel } from "./components/chart-bar-label";
export default function App({ children }: { children: React.ReactNode }) {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">   
      <SidebarProvider>
      <AppSidebar />
        <div className="absolute top-4 right-4 z-50">
          <ModeToggle />
        </div>
      <main className="w-full min-h-screen">
        <SidebarTrigger  />
        {children}
        <DashboardCards />
        <div className="p-1 lg:pl-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <ChartBarLabel />
            <ChartBarLabel />
            <ChartBarLabel />
          </div>
      </div>
      </main>
    </SidebarProvider>

    </ThemeProvider>
    </>
  )
}
