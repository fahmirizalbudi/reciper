import { PiArrowLeft, PiArrowRight } from "react-icons/pi"
import { Button } from "@/components/ui/button"

export default function MealPlansPage() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Active Meal Plan</h2>
              <p className="text-muted-foreground">Planning for Oct 24 - Oct 30.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9 bg-background"><PiArrowLeft className="w-4 h-4" /></Button>
              <span className="text-sm font-semibold w-24 text-center">This Week</span>
              <Button variant="outline" size="icon" className="h-9 w-9 bg-background"><PiArrowRight className="w-4 h-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 min-h-[500px]">
            {days.map((day, index) => (
              <div key={day} className="flex flex-col rounded-2xl border border-border/40 bg-card overflow-hidden">
                <div className="bg-muted/30 px-4 py-3 border-b border-border/40">
                  <span className="font-bold text-sm tracking-wide">{day}</span>
                  <span className="block text-xs text-muted-foreground">{24 + index} Oct</span>
                </div>
                <div className="flex-1 p-2 flex flex-col gap-2 bg-background min-h-[120px]">
                  {index === 0 || index === 2 || index === 4 ? (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 shadow-sm cursor-grab hover:border-primary/40 transition-colors">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1 block">Lunch</span>
                      <p className="text-sm font-medium leading-tight">Spicy Tuna Wrap</p>
                    </div>
                  ) : null}
                  {index !== 3 && index !== 6 ? (
                    <div className="bg-card border border-border/40 rounded-xl p-3 shadow-sm cursor-grab hover:border-foreground/20 transition-colors">
                      <div className="w-full h-16 rounded-md bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center mb-2"></div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 block">Dinner</span>
                      <p className="text-sm font-medium leading-tight line-clamp-2">Classic Beef Wellington</p>
                    </div>
                  ) : null}
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-xs font-semibold p-2 mt-auto border-2 border-dashed border-border/40 rounded-xl hover:border-border/80 transition-colors w-full justify-center">
                    + Add Meal
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
