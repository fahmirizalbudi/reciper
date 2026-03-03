import { BookOpen, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MyRecipesPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0 bg-background">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Recipes</h2>
          <p className="text-muted-foreground">Manage your personal recipe library.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-5 h-5" />
          New Recipe
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your recipes..." className="pl-9 bg-background" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
        {/* Mock Recipe Card 1 */}
        <div className="group rounded-2xl border border-border/40 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="aspect-video w-full bg-muted/50 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
             <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
               Published
             </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">Classic Beef Wellington</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">A show-stopping centerpiece featuring tender beef coated in mushroom duxelles.</p>
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
               <span className="text-xs font-medium text-muted-foreground">Updated 2d ago</span>
               <Button variant="ghost" size="sm" className="h-8 px-2 text-primary">Edit</Button>
            </div>
          </div>
        </div>

        {/* Mock Recipe Card 2 */}
        <div className="group rounded-2xl border border-border/40 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="aspect-video w-full bg-muted/50 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
             <div className="absolute top-3 right-3 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-bold ring-1 ring-primary/20 shadow-sm">
               Draft
             </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">Artisan Margherita Pizza</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">Wood-fired style pizza with fresh mozzarella and torn basil leaves.</p>
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
               <span className="text-xs font-medium text-muted-foreground">Updated 5h ago</span>
               <Button variant="ghost" size="sm" className="h-8 px-2 text-primary">Edit</Button>
            </div>
          </div>
        </div>
        
        {/* Mock Recipe Card 3 */}
        <div className="group rounded-2xl border border-border/40 bg-card overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="aspect-video w-full bg-muted/50 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center"></div>
             <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
               Published
             </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">Creamy Wild Mushroom Soup</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">Rich, earthy soup made with three varieties of hand-foraged mushrooms.</p>
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
               <span className="text-xs font-medium text-muted-foreground">Updated 1w ago</span>
               <Button variant="ghost" size="sm" className="h-8 px-2 text-primary">Edit</Button>
            </div>
          </div>
        </div>

        {/* Empty State / Create Target */}
        <div className="rounded-2xl border-2 border-dashed border-border/60 bg-muted/10 flex flex-col items-center justify-center text-center p-8 text-muted-foreground hover:bg-muted/20 hover:border-primary/50 hover:text-foreground transition-all cursor-pointer min-h-[300px]">
           <div className="w-12 h-12 rounded-full bg-background shadow-sm border border-border/20 flex items-center justify-center mb-4">
             <Plus className="w-6 h-6 text-primary" />
           </div>
           <h3 className="font-bold text-lg text-foreground mb-1">Create Recipe</h3>
           <p className="text-sm max-w-[200px]">Start drafting a new recipe to add to your collection.</p>
        </div>

      </div>
    </div>
  )
}
