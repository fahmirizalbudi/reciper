import { PiPlus, PiMagnifyingGlass, PiEye, PiPencilSimple, PiTrash } from "react-icons/pi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RecipesPage() {
  const recipes = [
    { id: 1, name: "Classic Beef Wellington", category: "Main", difficulty: "Hard", prepTime: "90 min", status: "Published", views: 4521 },
    { id: 2, name: "Artisan Margherita Pizza", category: "Main", difficulty: "Medium", prepTime: "45 min", status: "Draft", views: 2103 },
    { id: 3, name: "Creamy Wild Mushroom Soup", category: "Soup", difficulty: "Easy", prepTime: "30 min", status: "Published", views: 3876 },
    { id: 4, name: "Lemon Herb Roasted Chicken", category: "Main", difficulty: "Medium", prepTime: "60 min", status: "Published", views: 5210 },
    { id: 5, name: "Tiramisu", category: "Dessert", difficulty: "Medium", prepTime: "40 min", status: "Published", views: 6340 },
    { id: 6, name: "Spicy Thai Basil Stir-fry", category: "Main", difficulty: "Easy", prepTime: "20 min", status: "Draft", views: 0 },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Recipe Management</h2>
              <p className="text-muted-foreground">Manage all recipes that appear on the public site.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <PiPlus className="w-4 h-4" />
              New Recipe
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search recipes..." className="pl-9 bg-background" />
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-card shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 border-b border-border/40 bg-muted/30 px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-4">Recipe Name</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-1">Difficulty</div>
              <div className="col-span-2">Prep Time</div>
              <div className="col-span-1">Views</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y divide-border/40">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-muted/10 transition-colors">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/40 overflow-hidden shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5"></div>
                    </div>
                    <span className="font-medium text-sm truncate">{recipe.name}</span>
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">{recipe.category}</div>
                  <div className="col-span-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      recipe.difficulty === "Easy" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" :
                      recipe.difficulty === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400" :
                      "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
                    }`}>{recipe.difficulty}</span>
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">{recipe.prepTime}</div>
                  <div className="col-span-1 text-sm font-medium">{recipe.views.toLocaleString()}</div>
                  <div className="col-span-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      recipe.status === "Published"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-muted text-muted-foreground"
                    }`}>{recipe.status}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <PiEye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <PiPencilSimple className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <PiTrash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing 1-6 of 142 recipes</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
