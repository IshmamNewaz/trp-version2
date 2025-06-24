import { useSidebar } from "@/components/ui/sidebar"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { description } from "./chart-bar-label";
import { Skeleton } from "@/components/ui/skeleton"
export default function DashboardCards() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  const [dashboardData, setDashboardData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('#') // ✅ fixed typo
      .then(res => { 
        setDashboardData(res.data)
        setIsLoading(false)
        
      })
      .catch(err => console.error("Failed to load dashboard data:", err))
      // .finally(() => setIsLoading(false))
  }, [])

  // Basic cards
  const cards = [
    {
      title: "Panel Size - HHs",
      description: "Total Devices Active",
      body: dashboardData?.stb_all,
    },
    {
      title: "Panel Size - People",
      description: "Total Viewers",
      body: dashboardData?.stb_total,
    },
  ]

  // Custom multi-line card
  const cards2 = [
    {
      titleCustom: "Total HHs & People Active",
      description1: "Active Devices",
      body1: `${dashboardData?.stb_active} HHs`,
      description2: "Active Viewers",
      body2: `${dashboardData?.stb_active_user} People`,
    }
  ]

  return (
    <section className="p-1 lg:pl-6">
      <div
        className={`grid gap-2 sm:grid-cols-2 ${isCollapsed ? "md:grid-cols-4" : "lg:grid-cols-3"} 
          ${isCollapsed ? "lg:grid-cols-6" : "lg:grid-cols-5"} xl:grid-cols-6`}
      >
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-6 w-3/4" />
              ) : (
                <p className="text-2xl font-semibold">{card.body}</p>
              )}
            </CardContent>
          </Card>
        ))}

        {cards2.map((card) => (
          <Card key={card.titleCustom}>
            <CardHeader>
              <CardTitle>{card.titleCustom}</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <>
                  <Skeleton className="h-6 w-2/3 mb-2" />
                  <Skeleton className="h-6 w-2/3" />
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold mb-1">{card.body1}</p>
                  <p className="text-lg font-semibold">{card.body2}</p>
                </>
              )}
            </CardContent>
            {/* <CardFooter>
              <Button size="sm">{card.cta}</Button>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  )
}