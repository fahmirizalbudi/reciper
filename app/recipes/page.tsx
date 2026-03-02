import { SiteNavbar } from "@/components/site-navbar"
import { Search01Icon, FilterIcon, ArrowDown01Icon } from "hugeicons-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RecipesExplorerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      
      {/* Spacious Typographic Header */}
      <div className="w-full bg-background pt-12 md:pt-16 pb-6">
        <div className="container px-4 lg:px-6 mx-auto text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">Recipe Explorer</h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">Find the perfect dish for any occasion. Filter by category, difficulty, or diet.</p>
          </div>
          <div className="w-full md:w-auto relative max-w-sm">
            <Search01Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              className="w-full h-14 text-base bg-background border-0 focus-visible:ring-0 pl-12 shadow-md rounded-xl ring-1 ring-border/10"
              placeholder="Search all recipes..."
              type="search"
            />
          </div>
        </div>
      </div>

      <main className="flex-1 container px-4 lg:px-6 mx-auto py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* Filter Sidebar */}
          <aside className="hidden lg:flex flex-col gap-8 sticky top-24">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center justify-between">Difficulty <ArrowDown01Icon className="w-4 h-4" /></h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Easy</li>
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Medium</li>
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Hard</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center justify-between">Dietary <ArrowDown01Icon className="w-4 h-4" /></h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Vegetarian</li>
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Vegan</li>
                <li className="flex items-center gap-2"><div className="w-4 h-4 rounded border bg-background grid place-items-center"></div> Gluten-Free</li>
              </ul>
            </div>
          </aside>

          {/* Recipe Content Area */}
          <div className="flex flex-col gap-8">
            
            {/* Spotlight: Recipe of the Day */}
            <div className="w-full bg-card rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center border border-border/10 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-wide">
                Recipe of the Day
              </div>
              <div className="w-full md:w-1/2 aspect-video rounded-2xl bg-muted overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-4">
                <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors leading-tight">Ultimate Smoked Ribs</h3>
                <p className="text-muted-foreground line-clamp-3">A slow-cooked masterpiece that combines sweet and savory flavors for the perfect weekend barbecue. Tender, fall-off-the-bone goodness.</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-8 h-8 rounded-full bg-muted shadow-sm"></div>
                  <span className="text-sm font-semibold">Chef GrillMaster</span>
                </div>
              </div>
            </div>

            {/* Visual Pill Navigation */}
            <div className="flex overflow-x-auto gap-3 pb-2 pt-2 scrollbar-hide snap-x">
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-primary text-primary-foreground font-semibold shadow-sm text-base flex items-center gap-2">
                 All Recipes
               </button>
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-card border border-border/10 text-foreground font-medium hover:bg-muted transition-colors text-base shadow-sm flex items-center gap-2">
                 🍝 Pasta
               </button>
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-card border border-border/10 text-foreground font-medium hover:bg-muted transition-colors text-base shadow-sm flex items-center gap-2">
                 🥗 Salads
               </button>
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-card border border-border/10 text-foreground font-medium hover:bg-muted transition-colors text-base shadow-sm flex items-center gap-2">
                 🥩 Meat
               </button>
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-card border border-border/10 text-foreground font-medium hover:bg-muted transition-colors text-base shadow-sm flex items-center gap-2">
                 🍰 Desserts
               </button>
               <button className="snap-start shrink-0 h-14 px-6 rounded-full bg-card border border-border/10 text-foreground font-medium hover:bg-muted transition-colors text-base shadow-sm flex items-center gap-2">
                 🥣 Soups
               </button>
            </div>

            <div className="flex items-center justify-between lg:hidden">
              <Button variant="outline" className="gap-2 shadow-sm border-0 bg-muted/50 rounded-xl h-14 font-semibold text-base w-full">
                <FilterIcon className="h-5 w-5" /> Show Filters
              </Button>
            </div>

            <div className="flex items-center justify-between pb-4">
               <p className="text-muted-foreground font-medium">Showing <strong className="text-foreground">24</strong> recipes</p>
               <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium cursor-pointer">
                 Sort by: Newest <ArrowDown01Icon className="w-4 h-4" />
               </div>
            </div>

            {/* Premium Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="group flex flex-col rounded-3xl bg-card border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer relative">
                   <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                     45 mins
                   </div>
                   <div className="aspect-[4/3] w-full bg-muted/50 relative overflow-hidden">
                     <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                   </div>
                   <div className="p-5 flex flex-col flex-1">
                     <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">Gourmet Catalog Recipe #{i}</h3>
                     <p className="text-sm text-muted-foreground mt-2 line-clamp-2">A wonderful blend of spices and fresh ingredients that highlight pure flavors.</p>
                     <div className="mt-auto pt-6 flex items-center justify-between">
                       <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">MAIN COURSE</span>
                       <span className="text-xs text-muted-foreground font-medium">by ChefAuth</span>
                     </div>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="rounded-xl border-0 bg-muted/50 shadow-sm hover:bg-muted font-semibold h-14 px-8 text-base">
                Load More Recipes
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
