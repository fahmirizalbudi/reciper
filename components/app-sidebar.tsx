"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PiSquaresFour, PiBookOpen, PiCalendarBlank, PiUsersThree, PiGear, PiQuestion, PiChatCircle } from "react-icons/pi"

import { NavMain } from "@/components/nav-main"
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
      icon: PiSquaresFour,
    },
    {
      title: "Recipes",
      url: "/dashboard/recipes",
      icon: PiBookOpen,
    },
    {
      title: "Meal Plans",
      url: "/dashboard/meal-plans",
      icon: PiCalendarBlank,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: PiUsersThree,
    },
    {
      title: "Comments",
      url: "/dashboard/comments",
      icon: PiChatCircle,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: PiGear,
    },
    {
      title: "Help",
      url: "/dashboard/help",
      icon: PiQuestion,
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
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
