// components/DashboardCards.tsx
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

// Mock data – replace with real API results later
const cards = [
  {
    title: "Weekly Sales",
    description: "Conversion rate is up 12 % 📈",
    body: "৳ 1 520 000",
    cta: "View Report",
  },
  {
    title: "New Users",
    description: "In the last 24 h",
    body: "347",
    cta: "See Users",
  },
  {
    title: "Server Health",
    description: "CPU usage",
    body: "42 %",
    cta: "Open Metrics",
  },
  {
    title: "Server Health 2",
    description: "CPU usage",
    body: "42 %",
    cta: "Open Metrics",
  },
  {
    title: "Server Health 3",
    description: "CPU usage",
    body: "42 %",
    cta: "Open Metrics",
  },
  {
    title: "Server Health 4",
    description: "CPU usage",
    body: "42 %",
    cta: "Open Metrics",
  },
  
]

export default function DashboardCards() {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  return (
    // --- Body wrapper ------------------------------------------------------
    // left‑padding keeps content from sliding under the expanded sidebar
    <section className="p-1 lg:pl-6">
      {/* Responsive 1 / 2 / 3‑column grid */}
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
              <p className="text-2xl font-semibold">{card.body}</p>
            </CardContent>

            <CardFooter>
              <Button size="sm">{card.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
