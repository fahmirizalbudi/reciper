import { FileText, AlertCircle, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function DietaryGuidelinesPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0 bg-background max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-border/40">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dietary Guidelines</h2>
          <p className="text-muted-foreground">Configure the default nutritional targets for your meal plans.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid gap-8 mt-2">
        <section className="space-y-4">
           <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Daily Macro Targets</h3>
           </div>
           <p className="text-sm text-muted-foreground max-w-xl">
             Set your baseline macronutrient ratios. These will be used to show adherence warnings when generating your weekly meal plans.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <Label htmlFor="protein" className="font-semibold text-emerald-600 dark:text-emerald-400">Protein (g)</Label>
                <div className="relative">
                  <Input id="protein" type="number" defaultValue={150} className="rounded-xl pr-12 font-medium" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">grams</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="carbs" className="font-semibold text-amber-600 dark:text-amber-400">Carbohydrates (g)</Label>
                <div className="relative">
                  <Input id="carbs" type="number" defaultValue={220} className="rounded-xl pr-12 font-medium" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">grams</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fat" className="font-semibold text-rose-600 dark:text-rose-400">Fat (g)</Label>
                <div className="relative">
                  <Input id="fat" type="number" defaultValue={65} className="rounded-xl pr-12 font-medium" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">grams</span>
                </div>
              </div>
           </div>
           <div className="rounded-xl bg-muted/30 border border-border/40 p-4 flex gap-3 items-start mt-4">
              <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div className="space-y-1">
                 <p className="text-sm font-medium">Calculated Caloric Baseline</p>
                 <p className="text-sm text-muted-foreground">Based on the inputs above, your daily target is approximately <strong>2,065 kcal</strong>. This is derived using the standard 4/4/9 multiplier.</p>
              </div>
           </div>
        </section>

        <section className="space-y-4 pt-6 border-t border-border/40">
           <h3 className="text-lg font-bold">Global Restrictions & Preferences</h3>
           <p className="text-sm text-muted-foreground max-w-xl">
             Toggle ingredients or dietary styles to automatically flag incompatible recipes in your library.
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex flex-row items-center justify-between rounded-xl border border-border/40 p-4 bg-card shadow-sm">
                <div className="space-y-0.5">
                  <Label className="text-base">Vegetarian</Label>
                  <p className="text-xs text-muted-foreground">Flag recipes containing meat products.</p>
                </div>
                <Switch checked={false} />
              </div>
              <div className="flex flex-row items-center justify-between rounded-xl border border-border/40 p-4 bg-card shadow-sm">
                <div className="space-y-0.5">
                  <Label className="text-base">Gluten-Free</Label>
                  <p className="text-xs text-muted-foreground">Strictly avoid wheat-based ingredients.</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex flex-row items-center justify-between rounded-xl border border-border/40 p-4 bg-card shadow-sm">
                <div className="space-y-0.5">
                  <Label className="text-base">Dairy-Free</Label>
                  <p className="text-xs text-muted-foreground">Exclude milk, cheese, and butter.</p>
                </div>
                <Switch checked={false} />
              </div>
              <div className="flex flex-row items-center justify-between rounded-xl border border-border/40 p-4 bg-card shadow-sm">
                <div className="space-y-0.5">
                  <Label className="text-base">Nut Allergy</Label>
                  <p className="text-xs text-muted-foreground">Critical warning on tree nuts.</p>
                </div>
                <Switch checked={true} />
              </div>
           </div>
        </section>
      </div>
    </div>
  )
}
