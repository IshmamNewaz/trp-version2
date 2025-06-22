import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
// import Buttons from './components/Buttons';
import { ModeToggle } from "@/components/mode-toggle"
import DashboardCards from './components/dashboard-cards';
import { ChartBarLabel } from "./components/chart-bar-label";
import React, { useEffect, useState } from "react"
import { DataTableDemo } from "@/components/tables/data-table-demo"

//Table Section
import { columns} from "./components/tables/columns"
import { DataTable } from "./components/tables/data-table"
import type {Payment} from "./components/tables/columns"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//      { id: "1", amount: 250, status: "pending",    email: "user1@example.com" },
//     { id: "2", amount: 99,  status: "success",    email: "user2@example.com" },
//     { id: "3", amount: 70,  status: "processing", email: "user3@example.com" },
//     // ...
//   ]
// }
//Table Section End
export default function App({ children }: { children: React.ReactNode }) {
   const [data, setData] = useState<Payment[]>([])

  useEffect(() => {
    // replace with real fetch
    setData([
      { id: "1", amount: 250, status: "pending",    email: "user1@example.com" },
      { id: "2", amount: 99,  status: "success",    email: "user2@example.com" },
      { id: "3", amount: 70,  status: "processing", email: "user3@example.com" },
      
    ])
  }, [])
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
        { /* Table Section Start */ }
        <div className="p-1 lg:pl-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
            
            
            <Card className="shadow-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTableDemo />
              </CardContent>
            </Card>
            
            <ChartBarLabel />
            <DataTable columns={columns} data={data} />
 
          </div>
        { /* Table Section End */ }

      </div>
      </main>
    </SidebarProvider>

    </ThemeProvider>
    </>
  )
}
