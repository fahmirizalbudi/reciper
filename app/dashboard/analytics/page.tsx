"use client"

import { BarChart3, TrendingUp, Eye, Heart, ArrowUpRight } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const chartData = [
  { name: "Mon", views: 400, saves: 240 },
  { name: "Tue", views: 300, saves: 139 },
  { name: "Wed", views: 200, saves: 980 },
  { name: "Thu", views: 278, saves: 390 },
  { name: "Fri", views: 189, saves: 480 },
  { name: "Sat", views: 239, saves: 380 },
  { name: "Sun", views: 349, saves: 430 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0 bg-background">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Detailed insights into your recipe performance.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border/40 bg-card p-6 shadow-sm">
           <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Total Views</h3>
              <Eye className="h-4 w-4 text-muted-foreground" />
           </div>
           <div className="flex flex-col">
              <span className="text-2xl font-bold">45,231</span>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                 <span className="text-emerald-500 font-medium flex items-center"><ArrowUpRight className="w-3 h-3"/> 20.1%</span> from last month
              </p>
           </div>
        </div>
        <div className="rounded-xl border border-border/40 bg-card p-6 shadow-sm">
           <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Total Saves</h3>
              <Heart className="h-4 w-4 text-muted-foreground" />
           </div>
           <div className="flex flex-col">
              <span className="text-2xl font-bold">2,350</span>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                 <span className="text-emerald-500 font-medium flex items-center"><ArrowUpRight className="w-3 h-3"/> 15.2%</span> from last month
              </p>
           </div>
        </div>
        <div className="rounded-xl border border-border/40 bg-card p-6 shadow-sm">
           <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Published Recipes</h3>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
           </div>
           <div className="flex flex-col">
              <span className="text-2xl font-bold">142</span>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                 <span className="text-emerald-500 font-medium flex items-center"><ArrowUpRight className="w-3 h-3"/> 4</span> new this month
              </p>
           </div>
        </div>
        <div className="rounded-xl border border-border/40 bg-card p-6 shadow-sm">
           <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">Avg. Rating</h3>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
           </div>
           <div className="flex flex-col">
              <span className="text-2xl font-bold">4.8</span>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                 Based on 1.2k reviews
              </p>
           </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 h-[400px]">
        <div className="rounded-xl border border-border/40 bg-card shadow-sm col-span-4 p-6 flex flex-col">
           <h3 className="font-semibold text-lg mb-6">Engagement Overview</h3>
           <div className="flex-1 min-h-0">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                   <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                   <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                   <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'}} />
                   <Bar dataKey="views" fill="#ff5e3a" radius={[4, 4, 0, 0]} />
                   <Bar dataKey="saves" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
        <div className="rounded-xl border border-border/40 bg-card shadow-sm col-span-3 p-6 flex flex-col">
           <h3 className="font-semibold text-lg mb-6">Top Performing Recipes</h3>
           <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                   <div className="w-10 h-10 rounded-md bg-muted/50 border border-border/40 overflow-hidden shrink-0">
                     <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100')] bg-cover bg-center opacity-80"></div>
                   </div>
                   <div className="ml-4 space-y-1 overflow-hidden">
                      <p className="text-sm font-medium leading-none truncate">Gourmet Dinner Dish #{i}</p>
                      <p className="text-xs text-muted-foreground">{1400 - (i * 200)} Views &middot; {400 - (i * 50)} Saves</p>
                   </div>
                   <div className="ml-auto font-medium text-sm text-emerald-500">
                      Top {i}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
