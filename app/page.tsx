import { SiteNavbar } from "@/components/site-navbar"
import { Search01Icon } from "hugeicons-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Cook, Share, Inspire.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover your next favorite meal or share your culinary masterpiece. Reciper is the community for food enthusiasts.
              </p>
              
              <div className="w-full max-w-lg mt-8 flex items-center gap-2">
                <div className="relative flex-1">
                  <Search01Icon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="w-full bg-background pl-8 shadow-sm"
                    placeholder="Search for recipes, ingredients, or chefs..."
                    type="search"
                  />
                </div>
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories Placeholder */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trending Right Now</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore popular dishes from top creators around the globe.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Mock Cards for Layout */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-sm text-left">
                  <div className="aspect-video w-full rounded-lg bg-muted/50"></div>
                  <h3 className="font-semibold mt-2">Delicious Placeholder Request {i}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">This is a short description of the mock recipe intended to show the UI layout card.</p>
                  <Link href={`/recipes/${i}`} className="mt-2 text-sm font-medium text-primary hover:underline">
                    View Recipe &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
