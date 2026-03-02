import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 pb-20">
        
        {/* Community Hero */}
        <div className="w-full bg-background pt-16 md:pt-24 pb-16">
          <div className="container px-4 lg:px-6 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6">
              Join the <span className="text-primary">Global Kitchen.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto mb-10">
              Connect with passionate chefs, share your culinary journey, and participate in weekly challenges that inspire creativity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Button size="lg" className="rounded-xl px-8 h-14 text-base shadow-md font-bold">Join the Community</Button>
               <Button variant="outline" size="lg" className="rounded-xl px-8 h-14 text-base shadow-sm font-bold bg-muted/50 border-0 hover:bg-muted">Explore Forums</Button>
            </div>
          </div>
        </div>

        {/* Featured Community Events */}
        <div className="w-full py-16 bg-card border-y border-border/5">
           <div className="container px-4 lg:px-6 mx-auto">
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-bold tracking-tight text-foreground">Active Challenges</h2>
               <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">View All</span>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
               
               {/* Event Card */}
               <div className="group rounded-3xl overflow-hidden relative shadow-sm border border-border/10">
                  <div className="aspect-video w-full relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wide">
                      Ends in 3 days
                    </div>
                    <div className="absolute bottom-4 left-6 z-10 flex -space-x-3">
                       <div className="w-10 h-10 rounded-full bg-muted border-2 border-background z-30 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=100" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-muted border-2 border-background z-20 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=100" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-muted border-2 border-background z-10 flex items-center justify-center text-xs font-bold bg-primary text-white">
                          +42
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-card flex flex-col gap-2">
                     <h3 className="text-2xl font-bold text-foreground">The Summer Grilling Challenge</h3>
                     <p className="text-muted-foreground line-clamp-2">Show us your best BBQ recipes for a chance to be featured on the main explorer page all month!</p>
                  </div>
               </div>

               {/* Event Card */}
               <div className="group rounded-3xl overflow-hidden relative shadow-sm border border-border/10">
                  <div className="aspect-video w-full relative">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10 bg-accent/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm uppercase tracking-wide">
                      Voting Phase
                    </div>
                    <div className="absolute bottom-4 left-6 z-10 flex -space-x-3">
                       <div className="w-10 h-10 rounded-full bg-muted border-2 border-background z-20 overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=100" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-muted border-2 border-background z-10 flex items-center justify-center text-xs font-bold bg-primary text-white">
                          +156
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-card flex flex-col gap-2">
                     <h3 className="text-2xl font-bold text-foreground">Mastering the Perfect Loaf</h3>
                     <p className="text-muted-foreground line-clamp-2">The community submits their finest sourdough creations. Vote for the most beautiful ear and crumb structure.</p>
                  </div>
               </div>

             </div>
           </div>
        </div>

      </main>
    </div>
  )
}
