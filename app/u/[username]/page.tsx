import { SiteNavbar } from "@/components/site-navbar"
import { PiUserCircle, PiInstagramLogo, PiTwitterLogo, PiLink } from "react-icons/pi"

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 pb-20 bg-background">
        
        {/* Full-bleed Profile Banner */}
        <div className="w-full h-[250px] md:h-[300px] bg-background relative">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center z-0 opacity-80"></div>
        </div>

        <div className="container px-4 lg:px-6 mx-auto relative z-20 -mt-24">
          <div className="flex flex-col gap-12">
            
            {/* Profile Overview */}
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-background flex items-center justify-center shadow-lg p-2 ring-1 ring-border/20">
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative">
                    <PiUserCircle className="w-16 h-16 text-primary absolute" />
                  </div>
                </div>
                <div className="mb-2">
                  <h1 className="text-3xl md:text-5xl font-black">{params.username}</h1>
                  <p className="text-muted-foreground mt-1 max-w-md text-lg">Creator profile describing their culinary focus and background with a premium layout.</p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="flex items-center justify-center gap-4 w-full md:w-auto">
                 <div className="bg-card shadow-sm border border-border/10 rounded-2xl px-6 py-4 flex flex-col items-center flex-1 md:flex-initial">
                    <span className="text-3xl font-black text-primary">12</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Recipes</span>
                 </div>
                 <div className="bg-card shadow-sm border border-border/10 rounded-2xl px-6 py-4 flex flex-col items-center flex-1 md:flex-initial">
                    <span className="text-3xl font-black text-foreground">1.2k</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1">Followers</span>
                 </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px] gap-8 md:gap-12 items-start mt-4">
               
               {/* Main Tabbed Content Area */}
               <div className="flex flex-col gap-8 md:order-1 order-2">
                  
                  {/* Mock Tabs Header */}
                  <div className="flex items-center gap-6 border-b border-border/20 pb-px">
                     <button className="pb-4 font-bold text-lg text-primary border-b-2 border-primary">
                        Published Recipes
                     </button>
                     <button className="pb-4 font-medium text-lg text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-border/30">
                        Saved Collections
                     </button>
                  </div>

                  {/* Recipes Grid */}
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="group flex flex-col rounded-3xl bg-card border border-border/5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative">
                        <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          45 mins
                        </div>
                        <div className="aspect-[4/3] w-full bg-muted/50 relative overflow-hidden">
                          <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-tr from-primary/10 to-accent/20"></div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">Creator's Fine Recipe #{i}</h3>
                          <p className="text-sm text-primary font-medium mt-1">HARD</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* About the Creator Bio Sidebar */}
               <aside className="md:order-2 order-1 flex flex-col gap-6 bg-muted/20 p-8 rounded-3xl border border-border/5">
                  <h3 className="text-xl font-bold tracking-tight">About {params.username}</h3>
                  <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
                     <p>
                        Hi! I'm a self-taught chef obsessed with finding the perfect balance of flavors. My journey started in my grandmother's kitchen and has evolved into a global culinary exploration.
                     </p>
                     <p>
                        I focus on sustainable, farm-to-table ingredients to create modern twists on classic comfort foods.
                     </p>
                  </div>

                  <div className="pt-6 border-t border-border/10 flex items-center justify-between">
                     <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow Me</span>
                     <div className="flex items-center gap-3">
                        <button className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm text-muted-foreground hover:text-primary transition-colors">
                           <PiInstagramLogo className="w-6 h-6" />
                        </button>
                        <button className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm text-muted-foreground hover:text-primary transition-colors">
                           <PiTwitterLogo className="w-6 h-6" />
                        </button>
                        <button className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm text-muted-foreground hover:text-primary transition-colors">
                           <PiLink className="w-6 h-6" />
                        </button>
                     </div>
                  </div>
               </aside>

            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
