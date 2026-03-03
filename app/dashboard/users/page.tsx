import { PiMagnifyingGlass, PiUserCircle, PiPencilSimple, PiTrash, PiShieldCheckered } from "react-icons/pi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UsersPage() {
  const users = [
    { id: 1, name: "Chef Isabella Russo", username: "isabellarusso", recipes: 34, role: "Chef", joined: "Jan 2024", status: "Active" },
    { id: 2, name: "Marco Delgado", username: "marcodelgado", recipes: 12, role: "Chef", joined: "Mar 2024", status: "Active" },
    { id: 3, name: "Aisha Patel", username: "aishapatel", recipes: 56, role: "Chef", joined: "Nov 2023", status: "Active" },
    { id: 4, name: "Thomas Leclerc", username: "thomasleclerc", recipes: 7, role: "Chef", joined: "Jun 2024", status: "Suspended" },
    { id: 5, name: "Yuki Tanaka", username: "yukitanaka", recipes: 41, role: "Chef", joined: "Feb 2024", status: "Active" },
    { id: 6, name: "Sofia Mendez", username: "sofiamendez", recipes: 0, role: "Viewer", joined: "Aug 2024", status: "Active" },
  ]

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
              <p className="text-muted-foreground">Manage all registered chefs and community members.</p>
            </div>
            <div className="flex gap-2 text-sm font-medium text-muted-foreground">
              <span className="rounded-lg bg-muted/50 px-3 py-1 border border-border/40">1,204 Total</span>
              <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1 border border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">1,198 Active</span>
            </div>
          </div>

          <div className="relative max-w-sm">
            <PiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users or @username..." className="pl-9 bg-background" />
          </div>

          <div className="rounded-xl border border-border/40 bg-card shadow-sm overflow-hidden">
            <div className="grid grid-cols-12 gap-4 border-b border-border/40 bg-muted/30 px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-4">User</div>
              <div className="col-span-2">Username</div>
              <div className="col-span-1">Recipes</div>
              <div className="col-span-1">Role</div>
              <div className="col-span-2">Joined</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
            <div className="divide-y divide-border/40">
              {users.map((u) => (
                <div key={u.id} className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-muted/10 transition-colors">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                      <PiUserCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{u.name}</span>
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">@{u.username}</div>
                  <div className="col-span-1 text-sm font-medium">{u.recipes}</div>
                  <div className="col-span-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 w-fit ${
                      u.role === "Chef" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {u.role === "Chef" && <PiShieldCheckered className="w-3 h-3" />}
                      {u.role}
                    </span>
                  </div>
                  <div className="col-span-2 text-sm text-muted-foreground">{u.joined}</div>
                  <div className="col-span-1">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${
                      u.status === "Active"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
                    }`}>{u.status}</span>
                  </div>
                  <div className="col-span-1 flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <PiPencilSimple className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <PiTrash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing 1-6 of 1,204 users</span>
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
