import { SiteNavbar } from "@/components/site-navbar"
import { Search01Icon, FilterIcon } from "hugeicons-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RecipesExplorerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 container px-4 lg:px-6 mx-auto py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Recipe Explorer</h1>
            <p className="text-muted-foreground">Find the perfect dish for any occasion.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search01Icon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="w-full bg-background pl-8"
                placeholder="Search recipes..."
                type="search"
              />
            </div>
            <Button variant="outline" className="w-full md:w-auto gap-2">
              <FilterIcon className="h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Grid Layout Mock */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-sm">
                 <div className="aspect-square w-full rounded-lg bg-muted/50"></div>
                 <h3 className="font-semibold text-sm mt-2">Catalog Recipe #{i}</h3>
                 <p className="text-xs text-muted-foreground">by Username</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
