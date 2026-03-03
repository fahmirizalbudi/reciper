import { BarChart3, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WeeklyReportsPage() {
  const reports = [
    { title: "Week 42 Nutrition Overview", date: "Oct 24, 2024", size: "1.2 MB" },
    { title: "Week 41 Nutrition Overview", date: "Oct 17, 2024", size: "1.1 MB" },
    { title: "Week 40 Nutrition Overview", date: "Oct 10, 2024", size: "1.3 MB" },
    { title: "September Monthly Wrap-up", date: "Oct 01, 2024", size: "3.4 MB" },
    { title: "Week 39 Nutrition Overview", date: "Sep 26, 2024", size: "1.2 MB" }
  ]

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0 bg-background max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Weekly Reports</h2>
          <p className="text-muted-foreground">Download your historical nutritional adherence and engagement reports.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <BarChart3 className="w-5 h-5" />
          Generate New Report
        </Button>
      </div>

      <div className="rounded-2xl border border-border/40 bg-card shadow-sm overflow-hidden mt-2">
         <div className="grid grid-cols-12 gap-4 border-b border-border/40 bg-muted/30 px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <div className="col-span-6 md:col-span-7">Report Name</div>
            <div className="col-span-3">Generated On</div>
            <div className="col-span-3 md:col-span-2 text-right">Action</div>
         </div>
         <div className="divide-y divide-border/40">
           {reports.map((report, i) => (
             <div key={i} className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-muted/10 transition-colors">
                <div className="col-span-6 md:col-span-7 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5" />
                   </div>
                   <div className="overflow-hidden">
                     <p className="font-semibold text-sm truncate">{report.title}</p>
                     <p className="text-xs text-muted-foreground mt-0.5">{report.size} &middot; PDF</p>
                   </div>
                </div>
                <div className="col-span-3 text-sm text-foreground">{report.date}</div>
                <div className="col-span-3 md:col-span-2 flex justify-end">
                   <Button variant="outline" size="sm" className="gap-2 shrink-0">
                     <Download className="w-4 h-4" />
                     <span className="hidden sm:inline">Download</span>
                   </Button>
                </div>
             </div>
           ))}
         </div>
         <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>Showing 1-5 of 24 reports</span>
            <div className="flex gap-2">
               <Button variant="outline" size="sm" disabled>Previous</Button>
               <Button variant="outline" size="sm">Next</Button>
            </div>
         </div>
      </div>
    </div>
  )
}
