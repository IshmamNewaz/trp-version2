// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ChevronDown, Calendar, Home, Inbox, Search, Settings, BatteryCharging, BatteryLow, Brain, Crown, Bomb} from "lucide-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

const items2 = [
  { title: "Super Charging ", url: "#", icon: BatteryCharging },
  { title: "Battery Low", url: "#", icon: BatteryLow },
  { title: "Kaboom", url: "#", icon: Bomb },
  { title: "Brains", url: "#", icon: Brain },
  { title: "Crown", url: "#", icon: Crown },
]


export function AppSidebar() {
  return (
    // 👇  collapsible="icon" keeps the rail visible when collapsed
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>TRP Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild tooltip={title}>
                    <a href={url}>
                      <Icon />
                      <span>{title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            ))}

            </SidebarMenu>
            
          </SidebarGroupContent>
        </SidebarGroup>
        
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                TRP Menu Two Collapsible
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarMenu>
                {items2.map(({ title, url, icon: Icon }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild tooltip={title}>
                      <a href={url}>
                        <Icon />
                        <span>{title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
