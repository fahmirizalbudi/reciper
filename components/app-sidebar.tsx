"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  DashboardSquare01Icon,
  Book02Icon,
  ChartHistogramIcon,
  Calendar02Icon,
  UserGroupIcon,
  Settings01Icon,
  HelpCircleIcon,
  Search01Icon,
  FolderOpenIcon,
  Analytics01Icon,
  Note01Icon
} from "hugeicons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Chef Gordon",
    email: "gordon@reciper.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DashboardSquare01Icon,
    },
    {
      title: "My Recipes",
      url: "#",
      icon: Book02Icon,
    },
    {
      title: "Meal Plans",
      url: "#",
      icon: Calendar02Icon,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartHistogramIcon,
    },
    {
      title: "Community",
      url: "#",
      icon: UserGroupIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings01Icon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: Search01Icon,
    },
  ],
  documents: [
    {
      name: "Saved Collections",
      url: "#",
      icon: FolderOpenIcon,
    },
    {
      name: "Dietary Guidelines",
      url: "#",
      icon: Note01Icon,
    },
    {
      name: "Weekly Reports",
      url: "#",
      icon: Analytics01Icon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard">
                <Image src="/logo.svg" alt="Reciper Logo" width={20} height={20} className="rounded-sm" />
                <span className="text-base font-semibold">Reciper</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
