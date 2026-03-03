import { SiteNavbar } from "@/components/site-navbar"
import { PiMagnifyingGlass } from "react-icons/pi"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      
      <main className="flex-1">
        {/* Immersive Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-background">
          {/* Background Image Overlay Mock */}
          <div className="absolute inset-x-4 inset-y-0 rounded-3xl bg-muted z-0 overflow-hidden">
             <div className="absolute inset-0 bg-primary/10"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
          </div>
          
          <div className="container relative z-20 px-4 md:px-6 mx-auto text-center mt-12 md:mt-24">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Cook, Share, Inspire.
              </h1>
              <p className="mx-auto max-w-[800px] text-lg text-foreground/80 md:text-2xl font-medium">
                Discover your next favorite meal or share your culinary masterpiece. Reciper is the premium community for food enthusiasts.
              </p>
              
              <div className="w-full max-w-2xl mt-10 p-2 bg-background/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-2 border border-border/50">
                <div className="relative flex-1">
                  <PiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    className="w-full h-14 bg-transparent border-0 focus-visible:ring-0 pl-12 text-base shadow-none"
                    placeholder="Search for recipes, ingredients, or chefs..."
                    type="search"
                  />
                </div>
                <Button size="lg" className="rounded-xl px-8 h-14 text-base shadow-md font-bold">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trending Right Now</h2>
                <p className="text-muted-foreground text-lg">
                  Explore popular dishes from top creators around the globe.
                </p>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary/80 font-semibold" asChild>
                <Link href="/recipes">View all recipes &rarr;</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Premium Borderless Cards */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group flex flex-col rounded-3xl bg-card border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative">
                  <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    45 mins
                  </div>
                  <div className="aspect-[4/3] w-full bg-muted/50 relative overflow-hidden">
                    {/* Image Mock */}
                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-tr from-primary/10 to-accent/20"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold tracking-wider text-primary uppercase">Dinner</span>
                    </div>
                    <h3 className="font-bold text-xl mt-1 mb-2 group-hover:text-primary transition-colors leading-tight">Savory Culinary Delight {i}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">This is a premium, borderless recipe card that uses smooth shadows and spacing to create a high-end UI feel.</p>
                    
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted"></div>
                      <span className="text-sm font-medium">Chef Master</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections Bento Grid */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">Featured Collections</h2>
              <p className="text-muted-foreground text-lg">Curated lists to inspire your next kitchen adventure.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
              <div className="md:col-span-2 md:row-span-2 group rounded-3xl overflow-hidden relative shadow-sm cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-3">24 Recipes</span>
                   <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">Summer Grilling Masterclass</h3>
                </div>
              </div>
              <div className="group rounded-3xl overflow-hidden relative shadow-sm cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white leading-tight">Vibrant Vegan Bowl</h3>
                </div>
              </div>
              <div className="group rounded-3xl overflow-hidden relative shadow-sm cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472251-c0b79dc1eb2e?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white leading-tight">Quick Breakfasts</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chefs to Follow Horizontal Carousel */}
        <section className="w-full py-16 md:py-24 bg-background overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">Top Creators</h2>
            
            {/* Extremely simple flex-nowrap row for mock scrolling */}
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="flex-none w-[280px] snap-center bg-card rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-border/10">
                  <div className="w-24 h-24 rounded-full bg-muted mb-4 ring-2 ring-background shadow-md overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
                  </div>
                  <h3 className="font-bold text-lg">Chef Pro {i}</h3>
                  <p className="text-sm text-primary font-medium mb-3">@chefpro_{i}</p>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">Award-winning pastry chef sharing sweet secrets.</p>
                  <Button variant="outline" className="w-full h-14 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-base font-semibold">Follow</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="bg-primary/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-sm">
               {/* Design Element Backgrounds */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

               <div className="flex-1 relative z-10 flex flex-col gap-6 text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-black text-foreground">Never miss a recipe.</h2>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                    Get hand-picked culinary inspiration delivered straight to your inbox every Sunday morning. No spam, just delicious food.
                  </p>
                  <div className="flex w-full max-w-md items-center space-x-2 bg-background p-1.5 rounded-2xl shadow-sm mx-auto md:mx-0">
                    <Input type="email" placeholder="Enter your email address" className="bg-transparent border-0 focus-visible:ring-0 pl-4 h-14 text-base shadow-none" />
                    <Button type="submit" size="lg" className="rounded-xl px-8 h-14 text-base shadow-md font-bold">Subscribe</Button>
                  </div>
               </div>
               
               <div className="flex-1 w-full max-w-md relative z-10 hidden md:block aspect-[4/3] rounded-3xl bg-card shadow-lg rotate-3 overflow-hidden p-2">
                 <div className="w-full h-full rounded-2xl bg-muted overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
