import { SiteNavbar } from "@/components/site-navbar"
import { CheckmarkCircle01Icon } from "hugeicons-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 pb-20">
        
        {/* Features Hero */}
        <div className="w-full bg-background pt-16 md:pt-24 pb-16">
          <div className="container px-4 lg:px-6 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6">
              Everything you need to <span className="text-primary">master the kitchen.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-10">
              Reciper isn't just a cookbook. It's a complete culinary ecosystem designed to help you discover, plan, and create incredible meals.
            </p>
          </div>
        </div>

        {/* Bento Grid Features */}
        <div className="container px-4 lg:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Main Feature spanning 2 columns */}
            <div className="md:col-span-2 group rounded-3xl overflow-hidden relative shadow-sm border border-border/10 bg-card">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498837167922-41c53bbf40d3?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                 <h3 className="text-3xl font-black text-white mb-2">Intelligent Recipe Parsing</h3>
                 <p className="text-white/80 max-w-lg">Import recipes from any website. Our engine will automatically format the ingredients and instructions into a clean, ad-free reading experience.</p>
              </div>
            </div>

            {/* Side Feature */}
            <div className="group rounded-3xl overflow-hidden relative shadow-sm border border-border/10 bg-card p-8 flex flex-col">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                 <CheckmarkCircle01Icon className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-2xl font-bold text-foreground mb-3">Weekly Meal Plans</h3>
               <p className="text-muted-foreground flex-1">Drag and drop your favorite recipes into a weekly calendar. Generate automated shopping lists with one click.</p>
            </div>

            {/* Side Feature Image */}
            <div className="group rounded-3xl overflow-hidden relative shadow-sm border border-border/10 bg-card">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                 <h3 className="text-2xl font-bold text-white mb-2">Nutritional Insights</h3>
                 <p className="text-white/80 line-clamp-2">Automatic macro and micro nutrient breakdown for every meal.</p>
              </div>
            </div>

            {/* Bottom Span Feature */}
            <div className="md:col-span-2 group rounded-3xl overflow-hidden relative shadow-sm border border-border/10 bg-primary/5 p-8 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                 <h3 className="text-3xl font-black text-foreground mb-4">Ad-Free Cooking Mode</h3>
                 <p className="text-muted-foreground text-lg mb-6">When it's time to cook, switch into a distraction-free mode that keeps your screen awake and instructions large and clear.</p>
                 <button className="bg-primary text-primary-foreground px-8 h-14 rounded-xl font-bold hover:shadow-lg transition-shadow text-base">Try it entirely free</button>
               </div>
               <div className="flex-1 w-full h-full rounded-2xl bg-muted overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-80"></div>
               </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
