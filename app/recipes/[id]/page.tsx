import { SiteNavbar } from "@/components/site-navbar"
import { Clock01Icon, FireIcon, UserGroupIcon, StarIcon } from "hugeicons-react"

export default function RecipeDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 bg-background pb-20">
        
        {/* Immersive Recipe Hero */}
        <div className="w-full h-[400px] md:h-[500px] bg-muted relative">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
           {/* Image Mock */}
           <div className="absolute inset-0 flex items-center justify-center text-muted-foreground z-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
             
           </div>

           <div className="absolute bottom-0 left-0 w-full z-20 pb-10">
              <div className="container px-4 lg:px-6 mx-auto">
                 <div className="max-w-3xl">
                   <div className="flex items-center gap-2 mb-4">
                     <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-primary-foreground tracking-wider uppercase shadow-sm">Main Course</span>
                   </div>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-md mb-4 leading-tight">Public Recipe Details #{params.id}</h1>
                   
                   <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium">
                     <div className="flex items-center gap-2"><Clock01Icon className="w-5 h-5"/> <span>45 Mins</span></div>
                     <div className="flex items-center gap-2"><UserGroupIcon className="w-5 h-5"/> <span>4 Servings</span></div>
                     <div className="flex items-center gap-2"><FireIcon className="w-5 h-5"/> <span>350 kcal</span></div>
                   </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="container px-4 lg:px-6 mx-auto -mt-6 relative z-30">
          <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            
            {/* Main Content Area */}
            <div className="flex flex-col gap-8">
              
              {/* Description Card */}
              <div className="bg-card rounded-3xl p-8 shadow-sm border-0">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  This is a mock description detailing the history, flavor profile, and context of this recipe in a premium, readable format. It replaces harsh borders with soft containment.
                </p>
              </div>

              {/* Ingredients & Instructions Container */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Ingredients Card */}
                <div className="bg-card rounded-3xl p-8 shadow-sm border-0 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold tracking-tight">Ingredients</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-base p-2 hover:bg-muted/50 rounded-xl transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                      <span className="font-semibold w-16">1 cup</span> 
                      <span className="text-muted-foreground">Premium Ingredient Mock 1</span>
                    </li>
                    <li className="flex items-center gap-4 text-base p-2 hover:bg-muted/50 rounded-xl transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                      <span className="font-semibold w-16">2 tbsp</span> 
                      <span className="text-muted-foreground">Spices Mock 2</span>
                    </li>
                    <li className="flex items-center gap-4 text-base p-2 hover:bg-muted/50 rounded-xl transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                      <span className="font-semibold w-16">1/2 tsp</span> 
                      <span className="text-muted-foreground">Flavoring Mock 3</span>
                    </li>
                  </ul>
                </div>

                {/* Instructions Card */}
                <div className="bg-card rounded-3xl p-8 shadow-sm border-0 flex flex-col gap-6">
                  <h3 className="text-2xl font-bold tracking-tight">Instructions</h3>
                  <ol className="space-y-6">
                     <li className="flex gap-4">
                       <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                       <p className="pt-1 text-foreground/80">Mise en place. Gather your equipment and ingredients.</p>
                     </li>
                     <li className="flex gap-4">
                       <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                       <p className="pt-1 text-foreground/80">Preheat the oven and prepare your mixing bowls.</p>
                     </li>
                     <li className="flex gap-4">
                       <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                       <p className="pt-1 text-foreground/80">Combine the wet and dry ingredients slowly.</p>
                     </li>
                     <li className="flex gap-4">
                       <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">4</span>
                       <p className="pt-1 text-foreground/80">Serve hot on a presented platter.</p>
                     </li>
                  </ol>
                </div>

              </div>
              
              {/* Reviews & Ratings Section */}
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/10 flex flex-col gap-8 mt-4">
                 <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pb-6 border-b border-border/10">
                   <div>
                     <h3 className="text-2xl font-bold tracking-tight">Community Reviews</h3>
                     <p className="text-muted-foreground mt-1">Based on 124 reviews from home cooks.</p>
                   </div>
                   <div className="flex items-center gap-4 bg-muted/30 px-6 py-4 rounded-2xl">
                     <div className="flex flex-col items-center">
                       <span className="text-4xl font-black text-foreground">4.8</span>
                       <div className="flex text-amber-500 mt-1">
                          <StarIcon className="w-4 h-4 fill-amber-500" />
                          <StarIcon className="w-4 h-4 fill-amber-500" />
                          <StarIcon className="w-4 h-4 fill-amber-500" />
                          <StarIcon className="w-4 h-4 fill-amber-500" />
                          <StarIcon className="w-4 h-4 fill-amber-500" />
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="flex flex-col gap-6">
                    {/* Mock Review */}
                    <div className="flex gap-4">
                       <div className="w-10 h-10 rounded-full bg-primary/20 shrink-0"></div>
                       <div className="flex flex-col">
                          <div className="flex items-center justify-between mb-1">
                             <span className="font-bold text-sm">Sarah Jenkins</span>
                             <span className="text-xs text-muted-foreground">2 days ago</span>
                          </div>
                          <div className="flex text-amber-500 mb-2">
                             <StarIcon className="w-3 h-3 fill-amber-500" />
                             <StarIcon className="w-3 h-3 fill-amber-500" />
                             <StarIcon className="w-3 h-3 fill-amber-500" />
                             <StarIcon className="w-3 h-3 fill-amber-500" />
                             <StarIcon className="w-3 h-3 fill-amber-500" />
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed">Absolutely phenomenal! I made this for a dinner party and it was a massive hit. The instructions were pristine and the bold flavor profiling is unmatched.</p>
                       </div>
                    </div>
                 </div>
                 <button className="w-full py-3 rounded-xl bg-muted/50 text-foreground font-semibold hover:bg-muted transition-colors text-sm">
                  Write a Review
                </button>
              </div>

            </div>

            {/* Sidebar Floating Elements */}
            <div className="flex flex-col gap-6">
              
              {/* Chef Profile Card */}
              <aside className="bg-card rounded-3xl p-8 shadow-sm border border-border/10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-muted/50 mb-4 ring-4 ring-background shadow-sm overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center"></div>
                </div>
                <h3 className="font-bold text-xl">Chef Placeholder</h3>
                <p className="text-sm text-primary font-medium mb-4">@chef_placeholder</p>
                <p className="text-sm text-muted-foreground mb-6">Passionate home cook sharing generational recipes and modern twists.</p>
                
                <button className="w-full py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors">
                  Follow Chef
                </button>
              </aside>

              {/* Nutritional Facts Widget */}
              <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/10 flex flex-col gap-6">
                 <h3 className="font-bold text-lg flex items-center justify-between">
                   Nutrition <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded-md">per serving</span>
                 </h3>
                 
                 <div className="flex items-center justify-between pb-4 border-b border-border/10">
                   <div className="flex flex-col">
                     <span className="text-3xl font-black text-foreground">350</span>
                     <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Calories</span>
                   </div>
                 </div>

                 <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1.5">
                     <div className="flex justify-between text-sm">
                       <span className="font-medium">Protein</span>
                       <span className="font-bold">24g</span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[45%]"></div>
                     </div>
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <div className="flex justify-between text-sm">
                       <span className="font-medium">Carbs</span>
                       <span className="font-bold">32g</span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                       <div className="h-full bg-amber-500 w-[60%]"></div>
                     </div>
                   </div>
                   <div className="flex flex-col gap-1.5">
                     <div className="flex justify-between text-sm">
                       <span className="font-medium">Fats</span>
                       <span className="font-bold">12g</span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                       <div className="h-full bg-rose-500 w-[25%]"></div>
                     </div>
                   </div>
                 </div>
              </div>
              
            </div>

          </div>

          {/* You Might Also Like Grid */}
          <div className="mt-20 pt-10 border-t border-border/10">
            <h2 className="text-2xl font-bold tracking-tight mb-8">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group flex flex-col rounded-3xl bg-card border border-border/5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative">
                  <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    45 mins
                  </div>
                  <div className="aspect-square w-full bg-muted/50 relative overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-tr from-primary/10 to-accent/20"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">Related Gourmet Dish {i}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-1">Chef Master</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
