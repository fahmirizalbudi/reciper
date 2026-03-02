import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft02Icon, ImageAdd02Icon, PlusSignIcon } from "hugeicons-react"
import Link from "next/link"

export default function RecipeEditorPage({ params }: { params: { id: string } }) {
  const isNew = params.id === "new"

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 lg:p-8 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/my-recipes">
              <ArrowLeft02Icon className="w-4 h-4" />
            </Link>
          </Button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">
              {isNew ? "Create New Recipe" : `Edit Recipe #${params.id}`}
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your recipe details, ingredients, and instructions.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2 border rounded-lg px-4 py-2 bg-background">
            <Switch id="publish-mode" />
            <Label htmlFor="publish-mode" className="font-medium cursor-pointer">Published to Public</Label>
          </div>
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-4">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4 border rounded-xl p-6 bg-card">
            <h2 className="text-lg font-semibold">General Information</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Recipe Title</Label>
                <Input id="title" placeholder="e.g. Garlic Butter Shrimp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="A short description of the recipe..." 
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="prep">Prep Time</Label>
                   <Input id="prep" placeholder="15m" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="cook">Cook Time</Label>
                   <Input id="cook" placeholder="30m" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="servings">Servings</Label>
                   <Input id="servings" placeholder="4" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="calories">Calories</Label>
                   <Input id="calories" placeholder="450" />
                 </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 border rounded-xl p-6 bg-card">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Ingredients</h2>
                <Button variant="ghost" size="sm" className="h-8 gap-1"><PlusSignIcon className="w-4 h-4"/> Add row</Button>
              </div>
              <div className="space-y-3">
                 {/* Mock ingredients rows */}
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex gap-2">
                     <Input placeholder="Qty" className="w-20" />
                     <Input placeholder="Ingredient name..." className="flex-1" />
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border rounded-xl p-6 bg-card">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Instructions</h2>
                <Button variant="ghost" size="sm" className="h-8 gap-1"><PlusSignIcon className="w-4 h-4"/> Add step</Button>
              </div>
              <div className="space-y-3">
                 {/* Mock instruction rows */}
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex gap-2">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium shrink-0">{i}</span>
                     <Textarea placeholder="Describe this step..." className="min-h-[60px]" />
                   </div>
                 ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Media & Settings */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border rounded-xl p-6 bg-card">
            <h2 className="text-lg font-semibold">Media</h2>
            <div className="aspect-video w-full rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-2 text-muted-foreground bg-accent/20 cursor-pointer hover:bg-accent/40 transition-colors">
              <ImageAdd02Icon className="w-8 h-8" />
              <span className="text-sm font-medium">Upload Cover Image</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 border rounded-xl p-6 bg-card">
            <h2 className="text-lg font-semibold">Categorization</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Difficulty</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                  <option>Masterchef</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Meal Type</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Dessert</option>
                  <option>Snack</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
