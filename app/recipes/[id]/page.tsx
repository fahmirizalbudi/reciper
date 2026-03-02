import { SiteNavbar } from "@/components/site-navbar"
import { Clock01Icon, FireIcon, UserGroupIcon } from "hugeicons-react"

export default function RecipeDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 container px-4 lg:px-6 mx-auto py-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-10">
          
          <div className="flex flex-col gap-8">
            <div className="aspect-video w-full rounded-2xl bg-muted overflow-hidden relative">
               {/* Hero Image Mock */}
               <div className="absolute inset-0 bg-accent/20 flex items-center justify-center text-muted-foreground">
                 Image Placeholder for Recipe {params.id}
               </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">Public Recipe Details #{params.id}</h1>
              <p className="text-lg text-muted-foreground">
                This is a mock description detailing the history, flavor profile, and context of this recipe in a marketing-friendly view.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-2 pb-6 border-b">
                 <div className="flex items-center gap-2 text-muted-foreground"><Clock01Icon className="w-5 h-5"/> <span>45 Mins</span></div>
                 <div className="flex items-center gap-2 text-muted-foreground"><UserGroupIcon className="w-5 h-5"/> <span>4 Servings</span></div>
                 <div className="flex items-center gap-2 text-muted-foreground"><FireIcon className="w-5 h-5"/> <span>350 kcal</span></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Ingredients</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-4 text-sm border-b pb-2"><span>1 cup</span> <span>Ingredient Mock 1</span></li>
                  <li className="flex items-center gap-4 text-sm border-b pb-2"><span>2 tbsp</span> <span>Ingredient Mock 2</span></li>
                  <li className="flex items-center gap-4 text-sm border-b pb-2"><span>1/2 tsp</span> <span>Ingredient Mock 3</span></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Instructions</h3>
                <ol className="space-y-6 list-decimal list-outside ml-4">
                   <li className="pl-2">Mise en place. Gather your equipment and ingredients.</li>
                   <li className="pl-2">Preheat the oven and prepare your mixing bowls.</li>
                   <li className="pl-2">Combine the wet and dry ingredients slowly.</li>
                   <li className="pl-2">Serve hot on a presented platter.</li>
                </ol>
              </div>
            </div>
          </div>

          <aside className="border rounded-2xl p-6 h-fit bg-card hidden lg:block">
            <h3 className="font-semibold text-lg mb-4">About the Chef</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted"></div>
              <div>
                <p className="font-medium">Chef Placeholder</p>
                <p className="text-sm text-muted-foreground">@placeholder</p>
              </div>
            </div>
            <p className="text-sm mt-4 text-muted-foreground">Passionate home cook sharing generational recipes.</p>
          </aside>

        </div>
      </main>
    </div>
  )
}
