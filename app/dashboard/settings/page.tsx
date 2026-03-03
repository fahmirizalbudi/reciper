import { PiGear, PiUserCircle, PiBell, PiShieldCheck, PiFloppyDisk } from "react-icons/pi"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">Manage your account preferences.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-56 shrink-0">
              <nav className="flex flex-col gap-1">
                <button className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted/50 text-foreground font-medium transition-colors text-sm">
                  <PiUserCircle className="w-5 h-5" /> Account Profile
                </button>
                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground font-medium hover:bg-muted/30 hover:text-foreground transition-colors text-sm">
                  <PiBell className="w-5 h-5" /> Notifications
                </button>
                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground font-medium hover:bg-muted/30 hover:text-foreground transition-colors text-sm">
                  <PiShieldCheck className="w-5 h-5" /> Privacy & Security
                </button>
                <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground font-medium hover:bg-muted/30 hover:text-foreground transition-colors text-sm">
                  <PiGear className="w-5 h-5" /> Preferences
                </button>
              </nav>
            </aside>

            <div className="flex-1 max-w-3xl">
              <div className="rounded-2xl border border-border/40 bg-card shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border/40">
                  <h3 className="text-lg font-bold">Account Profile</h3>
                  <p className="text-sm text-muted-foreground mt-1">Manage your public profile information and avatar.</p>
                </div>
                <div className="p-6 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-muted/50 border border-border overflow-hidden">
                      <div className="w-full h-full bg-[url('/avatars/shadcn.jpg')] bg-cover bg-center"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Change Avatar</Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10 hover:text-destructive">Remove</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Gordon" className="rounded-lg bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Ramsay" className="rounded-lg bg-background" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="gordon@reciper.com" disabled className="rounded-lg bg-muted/50" />
                      <p className="text-[10px] text-muted-foreground mt-1">Contact support to change your primary email.</p>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Chef Bio</Label>
                      <textarea
                        id="bio"
                        className="w-full min-h-[100px] rounded-lg border border-border/40 bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        defaultValue="Multi-Michelin starred chef and television personality passionate about sharing perfect recipes with the world."
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-border/40 bg-muted/10 flex items-center justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <PiFloppyDisk className="w-4 h-4" />
                    Save Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
