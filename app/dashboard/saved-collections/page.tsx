import { Folder, Plus, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SavedCollectionsPage() {
  const folders = [
    { name: "Summer BBQs", count: 12, color: "bg-orange-500", date: "2 days ago" },
    { name: "Vegan Desserts", count: 8, color: "bg-emerald-500", date: "1 week ago" },
    { name: "Quick Breakfasts", count: 24, color: "bg-amber-500", date: "3 weeks ago" },
    { name: "Holiday Roasts", count: 5, color: "bg-rose-500", date: "1 month ago" },
    { name: "Meal Prep Sundays", count: 30, color: "bg-blue-500", date: "Just now" },
    { name: "Keto Friendly", count: 15, color: "bg-purple-500", date: "2 months ago" }
  ]

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0 bg-background">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Saved Collections</h2>
          <p className="text-muted-foreground">Organize your favorite recipes into folders.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-5 h-5" />
          New Collection
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {folders.map((folder, i) => (
           <div key={i} className="group rounded-2xl border border-border/40 bg-card p-6 shadow-sm hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
               <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                 <MoreVertical className="w-4 h-4" />
               </Button>
             </div>
             <div className="flex flex-col gap-4">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${folder.color}`}>
                  <Folder className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{folder.name}</h3>
                 <p className="text-sm text-muted-foreground mt-1">{folder.count} Recipes</p>
               </div>
               <div className="pt-4 border-t border-border/40 mt-2 flex items-center justify-between text-xs text-muted-foreground font-medium">
                  <span>Updated</span>
                  <span>{folder.date}</span>
               </div>
             </div>
           </div>
        ))}
        <div className="rounded-2xl border-2 border-dashed border-border/60 bg-muted/10 flex flex-col items-center justify-center text-center p-6 text-muted-foreground hover:bg-muted/20 hover:border-primary/50 hover:text-foreground transition-all cursor-pointer min-h-[220px]">
           <div className="w-10 h-10 rounded-full bg-background shadow-sm border border-border/20 flex items-center justify-center mb-3">
             <Plus className="w-5 h-5 text-primary" />
           </div>
           <h3 className="font-semibold text-base text-foreground mb-1">Create Folder</h3>
        </div>
      </div>
    </div>
  )
}
