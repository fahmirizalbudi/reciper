import { SiteNavbar } from "@/components/site-navbar"
import { UserCircleIcon } from "hugeicons-react"

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1 container px-4 lg:px-6 mx-auto py-8">
        <div className="flex flex-col gap-10">
          
          <div className="flex flex-col items-center justify-center text-center p-10 bg-muted/30 rounded-3xl">
             <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6">
               <UserCircleIcon className="w-12 h-12 text-primary" />
             </div>
             <h1 className="text-3xl font-bold">{params.username}</h1>
             <p className="text-muted-foreground mt-2 max-w-md">Creator profile describing their culinary focus and background.</p>
             <div className="flex items-center justify-center gap-6 mt-6">
                <div><span className="font-bold">12</span> <span className="text-sm text-muted-foreground">Recipes</span></div>
                <div><span className="font-bold">1.2k</span> <span className="text-sm text-muted-foreground">Followers</span></div>
             </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Published Recipes</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-sm">
                   <div className="aspect-square w-full rounded-lg bg-muted/50"></div>
                   <h3 className="font-semibold text-sm mt-2">Creator's Recipe #{i}</h3>
                   <p className="text-xs text-muted-foreground">45 MINS • HARD</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
