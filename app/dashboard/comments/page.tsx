import { PiMagnifyingGlass, PiTrash, PiCheckCircle } from "react-icons/pi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CommentsPage() {
  const comments = [
    { id: 1, user: "Marco Delgado", recipe: "Classic Beef Wellington", comment: "This was absolutely incredible! I made it for my family and everyone was blown away.", date: "2h ago", status: "Approved" },
    { id: 2, user: "Aisha Patel", recipe: "Artisan Margherita Pizza", comment: "The dough recipe is perfect. Added some extra basil on top — next level!", date: "4h ago", status: "Approved" },
    { id: 3, user: "Unknown User", recipe: "Tiramisu", comment: "Buy followers cheap at spam-site.com! Click now!!", date: "5h ago", status: "Flagged" },
    { id: 4, user: "Sofia Mendez", recipe: "Creamy Wild Mushroom Soup", comment: "Can I substitute cremini mushrooms for button mushrooms?", date: "1d ago", status: "Pending" },
    { id: 5, user: "Thomas Leclerc", recipe: "Lemon Herb Roasted Chicken", comment: "Followed the instructions exactly and it came out so dry. Disappointing.", date: "1d ago", status: "Approved" },
    { id: 6, user: "Yuki Tanaka", recipe: "Spicy Thai Basil Stir-fry", comment: "I doubled the chili and it was absolutely perfect for spice lovers!", date: "2d ago", status: "Approved" },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Comment Moderation</h2>
              <p className="text-muted-foreground">Review and manage all recipe comments from the community.</p>
            </div>
            <div className="flex gap-2 text-sm font-medium text-muted-foreground">
              <span className="rounded-lg bg-muted/50 px-3 py-1 border border-border/40">328 Total</span>
              <span className="rounded-lg bg-amber-50 text-amber-700 px-3 py-1 border border-amber-200/50 dark:bg-amber-500/10 dark:text-amber-400">12 Pending</span>
              <span className="rounded-lg bg-rose-50 text-rose-700 px-3 py-1 border border-rose-200/50 dark:bg-rose-500/10 dark:text-rose-400">3 Flagged</span>
            </div>
          </div>

          <div className="relative max-w-sm">
            <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search comments..." className="pl-9 bg-background" />
          </div>

          <div className="rounded-xl border border-border/40 bg-card shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 border-b border-border/40 bg-muted/30 px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-2">User</div>
              <div className="col-span-2">Recipe</div>
              <div className="col-span-5">Comment</div>
              <div className="col-span-1">Date</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y divide-border/40">
              {comments.map((c) => (
                <div key={c.id} className={`grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-muted/10 transition-colors ${c.status === "Flagged" ? "bg-rose-50/30 dark:bg-rose-500/5" : ""}`}>
                  <div className="col-span-2 font-medium text-sm truncate">{c.user}</div>
                  <div className="col-span-2 text-sm text-muted-foreground truncate">{c.recipe}</div>
                  <div className="col-span-5 text-sm line-clamp-2 text-foreground/80">{c.comment}</div>
                  <div className="col-span-1 text-xs text-muted-foreground whitespace-nowrap">{c.date}</div>
                  <div className="col-span-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      c.status === "Approved" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400" :
                      c.status === "Flagged" ? "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400" :
                      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                    }`}>{c.status}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-emerald-600">
                      <PiCheckCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <PiTrash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing 1-6 of 328 comments</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
